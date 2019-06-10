import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-user-layout',
    templateUrl: './user-layout.component.html',
    styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

    constructor(private readonly userService: UserService) { }

    ngOnInit() {
    }

    logout() {
        this.userService.logout();
    }

}
