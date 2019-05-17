import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/user';
import { SurveyService } from '../survey.service';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';

const alertify = require('alertifyjs');

@Component({
  selector: 'app-assign-users-to-forms',
  templateUrl: './assign-users-to-forms.component.html',
  styleUrls: ['./assign-users-to-forms.component.css']
})
export class AssignUsersToFormsComponent implements OnInit {

  users: User[];
  @ViewChild('form') form: NgForm;

  numberOfForms: number;

  get forms() {
    return new Array(this.numberOfForms);
  }

  constructor(
    private surveyService: SurveyService,
    private userService: UserService
  ) {
    this.users = [];
    this.numberOfForms = 2;
  }

  get disciplines() {
    return SurveyService.getDisciplines();
  }

  ngOnInit() {
  }

  onSelectDiscipline(discipline: string) {
    this.userService.getUsersByDiscipline(discipline)
      .subscribe(users => {
          this.users = users;
        },
        () => {
          alertify.error(`An error happened while trying to fetch users with ${ discipline }.`);
        });
  }

  onAssign() {
    this.userService.updateUser({ _id: this.form.value.user, numberOfForms: Number.parseInt(this.form.value.numberOfForms, 10) })
      .subscribe(() => {
          alertify.success(`User successfully assigned to ${ this.form.value.numberOfForms } forms.`);
          this.form.resetForm();
        },
        () => {
          alertify.error('An error happened while trying to assign user to forms.');
        });
  }
}
