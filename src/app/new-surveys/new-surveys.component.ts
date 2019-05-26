import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-new-surveys',
  templateUrl: './new-surveys.component.html',
  styleUrls: ['./new-surveys.component.css']
})
export class NewSurveysComponent implements OnInit {

  surveys: Survey[];
  experts: User[];
  busy: Subscription;

  constructor(
    private surveyService: SurveyService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.getSurveys();
  }

  assign(survey: Survey) {
    this.busy = this.surveyService.assignSurvey(survey).subscribe(result => {
      alertify.success('Eksperci przypisani!');
      this.getSurveys();
    },

    err => {
      alertify.error('Błąd, spróbuj ponownie!');
    });
  }

  unassign(survey: Survey) {
    this.busy = this.surveyService.unassignSurvey(survey).subscribe(result => {
      alertify.success('Anulowanie przypisanie ekspertów!');
      this.getSurveys();
    },

    err => {
      alertify.error('Błąd, spróbuj ponownie!');
    });
  }

  deleteSurvey(id: string) {
    alertify.confirm('Usunąć formularz?',
      () => {
        this.busy = this.surveyService.deleteSurvey(id).subscribe(result => {
          alertify.success('Usunięto pomyślnie!');
          this.getSurveys();
        },
        err => {
          alertify.error('Błąd, nie udało się usunąć formularzu zgloszeniowego!');
        });
      },
      () => {
        console.log('Anuluj');
      }).setHeader('<em> Usuwanie </em> ');
  }

  getSurveys() {
    this.surveyService.getSurveys('NEW').subscribe(result => {
      this.surveys = result.surveys;
      this.getExperts();
    },
    err => {
      console.log(err);
    });
  }

  getExperts() {
    this.surveys.forEach((survey) => {
      this.userService.getExperts(survey.discipline).subscribe(result => {
        survey.experts = result.result;
      },
      err => {
        console.log(err);
      });
    });
  }

  fetchExperts(discipline: string) {
    this.userService.getExperts(discipline).subscribe(result => {
      this.experts = result.result;
    },
    err => {
      console.log(err);
    });
  }

  logout() {
    this.userService.logout();
  }
}
