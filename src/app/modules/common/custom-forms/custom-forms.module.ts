import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelectModule, MatStepperModule, MatExpansionModule } from '@angular/material';
import { CustomControlsModule } from '../custom-controls/custom-controls.module';
import { NgBusyModule } from 'ng-busy';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { SurveyFormComponent } from './components/survey-form/survey-form.component';
import { SurveyStepperComponent } from './components/survey-stepper/survey-stepper.component';

@NgModule({
    declarations: [PersonFormComponent, UploadFormComponent, SurveyFormComponent, SurveyStepperComponent],
    imports: [
    CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        MatButtonModule,
        NgBusyModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatExpansionModule,
        FileUploadModule,
        CustomControlsModule
    ],
    exports: [
        PersonFormComponent,
        UploadFormComponent,
        SurveyFormComponent,
        SurveyStepperComponent
    ]
})
export class CustomFormsModule { }
