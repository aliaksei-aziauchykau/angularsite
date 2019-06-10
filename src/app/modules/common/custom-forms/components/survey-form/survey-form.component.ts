import { Component, OnInit } from '@angular/core';
const alertify = require('alertifyjs');
import { Survey } from 'src/model/survey';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { SurveyService } from 'src/app/survey.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-survey-form',
    templateUrl: './survey-form.component.html',
    styleUrls: ['./survey-form.component.css']
})
export class SurveyFormComponent implements OnInit {

    panelOpenState = false;

    survey: Survey = {
        discipline: '',
        title: '',
        summary: '',
        contribution: '',
        proof1: '',
        proof2: '',
        proof3: '',
        proof4: '',
        proof5: '',
        description: '',
        proof: '',
        filledBy: this.userService.theIdentity()._id
    };
    busy: Subscription;

    constructor(
        private userService: UserService,
        private surveyService: SurveyService,
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    get disciplines() {
        return SurveyService.getDisciplines();
    }

    ngOnInit() {
        if (this.route.snapshot.paramMap.get('id')) {
            this.route.url.subscribe(url => {
                this.surveyService.getSurvey(this.route.snapshot.paramMap.get('id')).subscribe(result => {
                    this.survey = result;
                    console.log('survey', this.survey);
                });
            });
        }
    }

    logout() {
        this.userService.logout();
    }

    saveSurveyObservable() {
        this.survey.discipline = this.route.snapshot.queryParamMap.get('discipline');
        const source = this.surveyService.addSurvey(this.survey)
            .pipe(
                tap(
                    () => alertify.success('Formularz dodany pomyślnie!'),
                    err => alertify.error('Proszę spróbować ponownie!')
                )
            );
        return source;
    }


    saveSurvey() {
        this.survey.discipline = this.route.snapshot.queryParamMap.get('discipline');
        this.surveyService.addSurvey(this.survey).subscribe(result => {
            alertify.success('Formularz dodany pomyślnie!');
            this.router.navigate(['/home']);
        },
            err => {
                alertify.error('Proszę spróbować ponownie!');
            });
    }

    updateSurveyObservable() {
        const source = this.surveyService.updateSurvey(this.survey)
            .pipe(
                tap(
                    () => alertify.success('Formularz dodany pomyślnie!'),
                    err => alertify.error('Proszę spróbować ponownie!')
                )
            );
        return source;
    }


    updateSurvey() {
        this.surveyService.updateSurvey(this.survey).subscribe(result => {
            alertify.success('Formularz zaaktualizowany pomyślnie!');
            this.router.navigate(['/home']);
        },
            err => {
                alertify.error('Proszę spróbować ponownie!');
            });
    }

    save() {
        if (this.survey._id) {
            this.updateSurvey();
        } else {
            this.saveSurvey();
        }
    }

    saveObservable() {
        const source = this.survey._id
            ? this.updateSurveyObservable()
            : this.saveSurveyObservable();

        return source;
    }
}
