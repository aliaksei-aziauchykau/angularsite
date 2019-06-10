import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPageRoutingModule } from './upload-page-routing.module';
import { UploadPageComponent } from './upload-page.component';
import { LayoutModule } from './../../common/layout/layout.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { CustomFormsModule } from './../../common/custom-forms/custom-forms.module';

@NgModule({
    declarations: [
        UploadPageComponent,
        FileUploadComponent
    ],
    imports: [
    CommonModule,
        LayoutModule,
        CustomFormsModule,
        UploadPageRoutingModule
    ]
})
export class UploadPageModule { }
