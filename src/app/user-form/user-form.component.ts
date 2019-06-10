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
    ngOnInit(): void {

    }
}
