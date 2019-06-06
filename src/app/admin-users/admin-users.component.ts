import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user';
import { UserService } from '../user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SafeComponent } from '../utils/safe.component';
import { UserEditDialogComponent } from '../modules/common/custom-dialogs/components/user-edit-dialog/user-edit-dialog.component';
import { takeUntil, tap, flatMap } from 'rxjs/operators';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent extends SafeComponent implements OnInit {

    users: User[];

    constructor(
        private userService: UserService,
        private dialog: MatDialog
    ) {
        super();
    }

    ngOnInit() {
       this.getUsers$().subscribe();
    }

    getUsers$() {
        return this.userService.getUsers()
        .pipe(
                takeUntil(this.unsubscriber),
                tap((x) => this.users = x)
        );
    }

    openDialogUserAdd() {
        this.dialog.open(UserEditDialogComponent, {
            width: '40em',
            data: null
        });
    }

    openDialogUserEdit(id: string) {
        this.dialog.open(UserEditDialogComponent, {
            width: '40em',
            data: { id }
        });

        this.dialog.afterAllClosed.pipe(
            takeUntil(this.unsubscriber),
            flatMap(() => this.getUsers$())
        ).subscribe();
    }

    logout() {
        this.userService.logout();
    }

}
