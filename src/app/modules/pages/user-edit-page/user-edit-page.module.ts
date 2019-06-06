import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditPageRoutingModule } from './user-edit-page-routing.module';
import { UserEditPageComponent } from './user-edit-page.component';
import { CustomFormsModule } from '../../common/custom-forms/custom-forms.module';

@NgModule({
    declarations: [
        UserEditPageComponent,
    ],
    imports: [
        CommonModule,
        CustomFormsModule,
        UserEditPageRoutingModule
    ]
})
export class UserEditPageModule { }
