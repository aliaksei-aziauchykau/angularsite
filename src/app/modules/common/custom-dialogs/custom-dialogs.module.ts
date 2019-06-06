import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditDialogComponent } from './components/user-edit-dialog/user-edit-dialog.component';
import { CustomFormsModule } from '../custom-forms/custom-forms.module';
import { NgBusyModule } from 'ng-busy';

@NgModule({
  declarations: [
    UserEditDialogComponent
  ],
  imports: [
    CommonModule,
    CustomFormsModule,
    NgBusyModule
  ],
  exports: [
    UserEditDialogComponent
  ],
  entryComponents: [
    UserEditDialogComponent
  ]
})
export class CustomDialogsModule { }
