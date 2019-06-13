import { Component, OnInit, Input } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';
import { UploadService } from 'src/app/upload.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

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

    panelOpenState;

    userId: string;
    surveyId: string;

    public uploader: FileUploader = new FileUploader({
        isHTML5: true
    });

    constructor(
        private readonly fb: FormBuilder,
        private readonly uploadService: UploadService,
        private readonly userService: UserService,
        private readonly activatedRoute: ActivatedRoute) { }

    public get uploadItems() {
        return this.uploader.queue;
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
            data.append('description', this.uploadForm.get('description').value);
            dataSet.push(data);
        }
        this.uploader.clearQueue();
        const source = dataSet.map(
            data => this.uploadFile(userId, surveyId, data).pipe());
        return source;
    }

    uploadFile(userId: string, surveyId: string, data: FormData): Observable<any> {
        return this.uploadService.uploadFiles(userId, surveyId, data);
    }


    ngOnInit() {
        this.userId = this.userService.theIdentity() && this.userService.theIdentity()._id || null;
        this.surveyId = this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.id || null;
    }
}
