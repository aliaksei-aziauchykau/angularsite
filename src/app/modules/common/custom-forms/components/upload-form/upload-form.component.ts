import { Component, OnInit, Input } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from 'src/app/upload.service';
import { ActivatedRoute } from '@angular/router';
const alertify = require('alertifyjs');
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-upload-form',
    templateUrl: './upload-form.component.html',
    styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

    title = 'Angular File Upload';
    uploadForm: FormGroup = this.fb.group({
        document: [null, null],
        description: [''],
    });

    public uploader: FileUploader = new FileUploader({
        isHTML5: true
    });

    constructor(
        private fb: FormBuilder,
        private uploadService: UploadService,
        private readonly activatedRoute: ActivatedRoute) { }

    public get uploadItems() {
        return this.uploader.queue;
    }

    uploadSubmit(userId: string, surveyId: string) {
        for (const queueItem of this.uploader.queue) {

            const fileItem = queueItem._file;
            if (fileItem.size > 15000000) {
                alert('Each File should be less than 15 MB of size.');
                return;
            }
        }

        for (let j = 0; j < this.uploader.queue.length; j++) {
            const data = new FormData();
            const fileItem = this.uploader.queue[j]._file;
            console.log(fileItem.name, this.uploader.queue);
            data.append('userPdf', fileItem, fileItem.name);
            data.append('fileSeq', 'seq' + j);
            this.uploadFile(userId, surveyId, data).subscribe(dataResponse => alertify(dataResponse.message));
        }
        this.uploader.clearQueue();
    }

    uploadSubmitObservable(userId: string, surveyId: string): Observable<any>[] {
        const dataSet: FormData[] = [];
        for (const queueItem of this.uploader.queue) {

            const fileItem = queueItem._file;
            if (fileItem.size > 15000000) {
                alert('Each File should be less than 15 MB of size.');
                return;
            }
        }

        for (let j = 0; j < this.uploader.queue.length; j++) {
            const data = new FormData();
            const fileItem = this.uploader.queue[j]._file;
            data.append('userPdf', fileItem, fileItem.name);
            data.append('fileSeq', 'seq' + j);
            dataSet.push(data);
        }
        this.uploader.clearQueue();
        const source = dataSet.map(
            data => this.uploadFile(userId, surveyId, data).pipe(tap(dataResponse => alertify(dataResponse.message))));
        return source;
    }

    uploadFile(userId: string, surveyId: string, data: FormData): Observable<any> {
        return this.uploadService.uploadFiles(userId, surveyId, data);
    }


    ngOnInit() {
    }

}