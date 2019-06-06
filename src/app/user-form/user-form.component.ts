import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';

const alertify = require('alertifyjs');

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

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


}
