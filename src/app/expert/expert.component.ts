import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
    selector: 'app-expert',
    templateUrl: './expert.component.html',
    styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

    constructor(private readonly userService: UserService) { }

    ngOnInit() {
    }

    logout() {
        this.userService.logout();
    }

}
