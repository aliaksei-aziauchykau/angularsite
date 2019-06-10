import { Component, OnInit, Input } from '@angular/core';
import { UploadItem } from './../../../../../models/view-models/upload-item.model';
import { UploadService } from 'src/app/upload.service';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-upload-items-presenter-control',
    templateUrl: './upload-items-presenter-control.component.html',
    styleUrls: ['./upload-items-presenter-control.component.css']
})
export class UploadItemsPresenterControlComponent implements OnInit {

    @Input() userId: string;
    @Input() surveyId: string;

    uploadItems: UploadItem[] = [];

    constructor(private readonly uploadService: UploadService) { }

    ngOnInit() {
        this.uploadService.getUploadFiles(this.userId, this.surveyId)
            .pipe(
                tap(x => this.uploadItems = x)
            ).subscribe();
    }

}
