import { Component, OnInit } from '@angular/core';
import { Subscription, Observable, forkJoin } from 'rxjs';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';
import { Rate } from '../../model/rate';
import { IUser } from '../models/interfaces/user.interface';
import { tap, zip, zipAll } from 'rxjs/operators';
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
  users: IUser[];

  constructor(private surveyService: SurveyService,
              private userService: UserService) {
  }

  getNonDraftedRates(survey: Survey) {
    return survey.rates.filter(rate => !rate.draft);
  }

  ngOnInit() {
    const users$ = this.userService.getUsers().pipe(
        tap(x => this.users = x)
    );
    const surveys$ = this.surveyService.getSurveys('RATED')
    .pipe(
        tap(result => this.surveys = result.surveys)
    );
    forkJoin(users$, surveys$).subscribe();
  }

  getUserById(id: string): IUser {
    const result = this.users.find(x => x._id === id);
    return result;
  }

  calculateRate(rates: Rate[]) {
    let res = 0;
    let count = 0;
    rates = rates || [];
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
