import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';
import { Rate } from '../../model/rate';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-expert-surveys',
  templateUrl: './expert-surveys.component.html',
  styleUrls: ['./expert-surveys.component.css']
})
export class ExpertSurveysComponent implements OnInit {

  surveys: Survey[];
  busy: Subscription;
  identity: User;

  constructor(
    private surveyService: SurveyService,
    private userService: UserService
    ) { }

  ngOnInit() {
    this.busy = this.surveyService.getSurveys('NEW', 'undefined', this.userService.theIdentity()._id).subscribe(result => {
      this.surveys = result.surveys;
    },
    err => {
      console.log(err);
    });
    this.identity = this.userService.theIdentity();
  }

  logout() {
    this.userService.logout();
  }

  surveyRated(survey: Survey) {
    return survey.rates.some(rate => !rate.draft && rate.expert === this.userService.theIdentity()._id);
  }
}
