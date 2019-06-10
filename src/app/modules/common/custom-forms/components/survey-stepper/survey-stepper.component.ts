import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { UploadFormComponent } from '../upload-form/upload-form.component';
import { UserService } from 'src/app/user.service';
import { SafeComponent } from 'src/app/utils/safe.component';
import { forkJoin, Observable, zip } from 'rxjs';
import { tap, mergeMap, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-survey-stepper',
    templateUrl: './survey-stepper.component.html',
    styleUrls: ['./survey-stepper.component.css']
})
export class SurveyStepperComponent extends SafeComponent implements OnInit {

    @ViewChild(SurveyFormComponent) surveyForm: SurveyFormComponent;
    @ViewChild(UploadFormComponent) uploadForm: UploadFormComponent;

    constructor(
        private readonly userSerivce: UserService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly router: Router,
    ) {
        super();
    }

    surveyId: string;
    userId: string;

    ngOnInit() {
    }

    public onSubmit() {
        this.userId = this.userSerivce.theIdentity() && this.userSerivce.theIdentity()._id || null;
        this.surveyId = this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.id || null;

        const zipFiles = (userId, surveyId) => this.uploadForm.uploadSubmitObservable(userId, surveyId);


        if (this.surveyId && this.userId) {
            const sourceForUpdate$ = forkJoin(
                [
                    this.surveyForm.saveObservable(),
                    ...zipFiles(this.userId, this.surveyId)]).pipe(tap(() => this.router.navigate(['/home'])));

            sourceForUpdate$.pipe(takeUntil(this.unsubscriber)).subscribe();
        } else {
            const sourceForAdd$ = this.surveyForm.saveObservable()
                .pipe(
                    mergeMap((x: { postedSurvey: { _id: string } }) =>
                        forkJoin(zipFiles(this.userId, x.postedSurvey._id))),
                    tap(x => this.router.navigate(['/home']))
                );
            sourceForAdd$.pipe(takeUntil(this.unsubscriber)).subscribe();
        }
    }

}
