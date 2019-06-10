import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-assigned-forms',
  templateUrl: './user-assigned-forms.component.html',
  styleUrls: ['./user-assigned-forms.component.css']
})
export class UserAssignedFormsComponent implements OnInit {

  numberOfAssignments: 0;
  discipline = '';

  constructor(private userService: UserService) {
  }

  get assignments() {
    return new Array(this.numberOfAssignments);
  }

  ngOnInit() {
    this.userService.getNumberOfAssignedForms()
      .subscribe(res => {
        this.numberOfAssignments = res.numberOfAssignments || 0;
        this.discipline = res.assignedDiscipline;
      });
  }

  logout() {
    this.userService.logout();
  }
}
