import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../model/user';
import { Survey } from '../../model/survey';
import { UserService } from '../user.service';
import { SurveyService } from '../survey.service';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.css']
})
export class UserFormsComponent implements OnInit {

  identity: User;
  surveys: Survey[];
  busy: Subscription;
  constructor(
    private userService: UserService,
    private surveyService: SurveyService,
    private router: Router
    ) {
    this.identity = this.userService.identity;
  }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys() {
    this.surveyService.getSurveys('NEW', this.userService.theIdentity()._id).subscribe(result => {
      this.surveys = result.surveys;
    },
    err => {
      console.log(err);
    });
  }

  logout() {
    this.userService.logout();
  }

  deleteSurvey(id: string) {
    alertify.confirm('Delete Survey?',
    () => {
      this.busy = this.surveyService.deleteSurvey(id).subscribe(result => {
        alertify.success('Deleted successfuly!');
        this.getSurveys();
      },
      err => {
        alertify.error('Try again later!');
      });
    },
    () => {
      console.log('cancel');
    });
  }
}
