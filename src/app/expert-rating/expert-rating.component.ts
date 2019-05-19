import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { Survey } from '../../model/survey';
import { SurveyService } from '../survey.service';
import { Rate } from '../../model/rate';
const alertify = require('alertifyjs');

@Component({
  selector: 'app-expert-rating',
  templateUrl: './expert-rating.component.html',
  styleUrls: ['./expert-rating.component.css']
})
export class ExpertRatingComponent implements OnInit {

  survey: Survey;
  rate: Rate = {};
  busy: Subscription;
  identity: User;
  rated = false;
  ratingIndex = 0;

  constructor(
    private surveyService: SurveyService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.busy = this.surveyService.getSurvey(this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.survey = result;
      this.survey.rates.forEach((surveyRate, index) => {
        if (surveyRate.expert === this.identity._id && !surveyRate.draft) {
          this.rated = true;
          this.ratingIndex = index;
        } else if (surveyRate.expert === this.identity._id && surveyRate.draft) {
          this.rate = Object.assign({}, surveyRate); // deep copy
        }
      });
    },
    err => {
      console.log(err);
    });
    this.identity = this.userService.theIdentity();
  }

  logout() {
    this.userService.logout();
  }

  rateSurvey(draft: boolean) {
    this.rate.survey = this.survey._id;
    this.rate.expert = this.identity._id;
    this.rate.draft = draft;
    this.busy = this.surveyService.rateSurvey(this.rate).subscribe(result => {
      alertify.success('Formularz oceniony');
      this.router.navigate(['/expert-surveys']);
    },
    err => {
      alertify.error('Coś poszło nie tak, spróbuj ponownie!');
    });
  }

}
