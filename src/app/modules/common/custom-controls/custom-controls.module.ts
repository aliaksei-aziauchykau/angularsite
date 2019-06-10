import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplineControlComponent } from './components/discipline-control/discipline-control.component';
import { MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SimpleMultiSelectComponent } from './components/simple-multi-select/simple-multi-select.component';
import { UploadItemsPresenterControlComponent } from './components/upload-items-presenter-control/upload-items-presenter-control.component';

@NgModule({
  declarations: [DisciplineControlComponent, SimpleMultiSelectComponent, UploadItemsPresenterControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [
    DisciplineControlComponent,
    SimpleMultiSelectComponent,
    UploadItemsPresenterControlComponent
  ]
})
export class CustomControlsModule { }
