import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineControlComponent } from './components/discipline-control/discipline-control.component';
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimpleMultiSelectComponent } from './components/simple-multi-select/simple-multi-select.component';

@NgModule({
  declarations: [DisciplineControlComponent, SimpleMultiSelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [
    DisciplineControlComponent,
    SimpleMultiSelectComponent
  ]
})
export class CustomControlsModule { }
