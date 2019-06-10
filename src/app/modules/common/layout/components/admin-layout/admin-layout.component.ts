import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

    constructor(private readonly userService: UserService) { }

    ngOnInit() {
    }

    logout() {
        this.userService.logout();
    }

}
