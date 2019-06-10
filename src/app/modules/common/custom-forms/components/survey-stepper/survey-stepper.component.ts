import { Component, OnInit, ViewChild } from '@angular/core';
import { SurveyFormComponent } from '../survey-form/survey-form.component';
import { UploadFormComponent } from '../upload-form/upload-form.component';
import { UserService } from 'src/app/user.service';
import { SafeComponent } from 'src/app/utils/safe.component';
import { forkJoin, Observable, zip } from 'rxjs';
import { tap, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-survey-stepper',
    templateUrl: './survey-stepper.component.html',
    styleUrls: ['./survey-stepper.component.css']
})
export class SurveyStepperComponent extends SafeComponent implements OnInit {

    @ViewChild(SurveyFormComponent) surveyForm: SurveyFormComponent;
    @ViewChild(UploadFormComponent) uploadForm: UploadFormComponent;

    constructor(private readonly userSerivce: UserService) {
        super();
    }

    ngOnInit() {
    }

    public onSubmit() {
        const zipFiles = (userId, surveyId) => {
            const observables = this.uploadForm.uploadSubmitObservable(userId, surveyId);
            console.log('aa', userId, surveyId, observables);
            return observables;
        };
        this.surveyForm.saveObservable()
            .pipe(
                mergeMap((x: { postedSurvey: { _id: string} }) =>
                    forkJoin(zipFiles(this.userSerivce.identity._id, x.postedSurvey._id))),
                tap(x => {})
            ).subscribe();
    }

}
