import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
  }

}
