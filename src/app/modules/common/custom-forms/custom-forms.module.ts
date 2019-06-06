import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';
import { NgBusyModule } from 'ng-busy';

@NgModule({
  declarations: [PersonFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    NgBusyModule,
    CustomControlsModule
  ],
  exports: [
    PersonFormComponent
  ]
})
export class CustomFormsModule { }
