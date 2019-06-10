import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/view-models/user.model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    identity: User;
    identityPromise: Promise<User>;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly userService: UserService) { }

    url = 'http://localhost:3000/api/upload';

    public uploadFiles(userId: string, surveyId: string, data: FormData): Observable<any> {
        const source = this.httpClient.post(`${this.url}/${userId}/survey/${surveyId}`, data, this.userService.options);
        return source;
    }

    public getUploadFiles(userId: string, surveyId: string): Observable<any> {
        const source = this.httpClient.get(`${this.url}/${userId}/survey/${surveyId}`, this.userService.options);
        return source;
    }
}
