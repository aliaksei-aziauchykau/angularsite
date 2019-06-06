import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from 'src/app/models/view-models/user.model';
import { UserService } from 'src/app/user.service';
import { Subscription } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SafeComponent } from 'src/app/utils/safe.component';
import { EditorMode } from 'src/app/models/enums/editor-mode.enum';
import { IUser } from 'src/app/models/interfaces/user.interface';

@Component({
    selector: 'app-user-edit-dialog',
    templateUrl: './user-edit-dialog.component.html',
    styleUrls: ['./user-edit-dialog.component.css']
})
export class UserEditDialogComponent extends SafeComponent implements OnInit {

    public model = null;
    public mode: EditorMode = EditorMode.Unknown;
    public subscription: Subscription;

    constructor(
        public dialogRef: MatDialogRef<UserEditDialogComponent>,
        public userService: UserService,
        @Inject(MAT_DIALOG_DATA) public data: { id?: string }) {
        super();
    }

    closeDialog(): void {
        this.dialogRef.close();
    }

    submit(user: IUser): void {
        if (this.mode === EditorMode.Add) {
            this.subscription = this.userService.createUser(user)
                .pipe(
                    takeUntil(this.unsubscriber),
                    tap(() => this.dialogRef.close())
                ).subscribe();
        } else {
            this.subscription = this.userService.updateUserById(user._id, user)
                .pipe(
                    takeUntil(this.unsubscriber),
                    tap(() => this.dialogRef.close())
                ).subscribe();
        }
    }

    ngOnInit(): void {
        if (this.data && this.data.id) {
            this.subscription = this.userService.getUserById(this.data.id)
                .pipe(
                    takeUntil(this.unsubscriber),
                    tap((x) => this.model = x)
                ).subscribe();
            this.mode = EditorMode.Update;
        } else {
            this.model = new User();
            this.mode = EditorMode.Add;
        }
    }
}


