import { Component, OnInit, Input } from '@angular/core';
import { UploadItem } from './../../../../../models/view-models/upload-item.model';
import { UploadService } from 'src/app/upload.service';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../../../environments/environment';

@Component({
    selector: 'app-upload-items-presenter-control',
    templateUrl: './upload-items-presenter-control.component.html',
    styleUrls: ['./upload-items-presenter-control.component.css']
})
export class UploadItemsPresenterControlComponent implements OnInit {

    @Input() userId: string;
    @Input() surveyId: string;
    @Input() visibility = true;

    panelOpenState = false;

    uploadItems: UploadItem[] = [];
    environment = environment;

    constructor(private readonly uploadService: UploadService) { }

    ngOnInit() {
        if (this.userId && this.surveyId) {
            this.uploadService.getUploadFiles(this.userId, this.surveyId)
                .pipe(
                    tap(x => this.uploadItems = x)
                ).subscribe();
        }
    }

}
