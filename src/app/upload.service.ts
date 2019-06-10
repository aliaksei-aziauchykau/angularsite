import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/view-models/user.model';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    identity: User;
    identityPromise: Promise<User>;

    constructor(
        private readonly httpClient: HttpClient,
        private readonly userService: UserService) { }

    url = environment.apiServer;

    public uploadFiles(userId: string, surveyId: string, data: FormData): Observable<any> {
        const source = this.httpClient.post(`${this.url}/api/upload/${userId}/survey/${surveyId}`, data, this.userService.options);
        return source;
    }

    public getUploadFiles(userId: string, surveyId: string): Observable<any> {
        const source = this.httpClient.get(`${this.url}/api/upload/${userId}/survey/${surveyId}`, this.userService.options);
        return source;
    }
}
