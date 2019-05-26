import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: User[];

  constructor(
    private userService: UserService
    ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.users = result;
    });
  }

  logout() {
    this.userService.logout();
  }

}
