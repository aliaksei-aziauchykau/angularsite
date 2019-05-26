import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';
import { Rate } from '../../model/rate';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-rated-surveys',
  templateUrl: './rated-surveys.component.html',
  styleUrls: ['./rated-surveys.component.css']
})
export class RatedSurveysComponent implements OnInit {

  surveys: Survey[];
  survey: Survey = {};
  busy: Subscription;
  popover = false;

  constructor(private surveyService: SurveyService,
              private userService: UserService) {
  }

  getNonDraftedRates(survey: Survey) {
    return survey.rates.filter(rate => !rate.draft);
  }

  ngOnInit() {
    this.surveyService.getSurveys('RATED').subscribe(result => {
      this.surveys = result.surveys;
    },
    err => {
      console.log(err);
    });
  }

  calculateRate(rates: Rate[]) {
    let res = 0;
    let count = 0;
    rates.forEach((thing) => {
      if (!thing.draft) {
        res = res + thing.rate;
        count++;
      }
    });
    if (count) {
      return res / count;
    } else {
      return '';
    }
  }

  showPopover(survey?: Survey) {
    if (!this.popover) {
      this.survey = survey;
      this.popover = !this.popover;
    } else {
      this.survey = {};
      this.popover = !this.popover;
    }
  }

  logout() {
    this.userService.logout();
  }
}
