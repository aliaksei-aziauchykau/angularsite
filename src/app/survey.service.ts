import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/publishReplay';
import { isDevMode } from '@angular/core';

import { Survey } from '../model/survey';
import { Rate } from '../model/rate';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  url: string = '';
  options = { headers: new HttpHeaders({ Authorization: localStorage.currentUser }) };

  constructor(
    private http: HttpClient
    ) {
    if (isDevMode()) {
        this.url = 'https://system-ekspercki.herokuapp.com'; // lub lokal jesli server nie dziala
      } else {
        this.url = 'http://localhost:3000';
      }
  }

  getSurveys(status?: string, id?: string, expert?: string) {
    return this.http.get<any>(`${this.url}/api/survey/${status}/${id}/${expert}`, this.options).publishReplay(1).refCount();
  }

  getSurvey(id: string) {
    return this.http.get<any>(`${this.url}/api/survey/${id}`, this.options).publishReplay(1).refCount();
  }

  addSurvey(survey: Survey) {
    return this.http.post<any>(`${this.url}/api/survey`, survey, this.options).publishReplay(1).refCount();
  }

  updateSurvey(survey: Survey) {
    return this.http.patch<any>(`${this.url}/api/survey`, survey, this.options).publishReplay(1).refCount();
  }

  deleteSurvey(id: string) {
    return this.http.delete<any>(`${this.url}/api/survey/${id}`, this.options).publishReplay(1).refCount();
  }

  assignSurvey(survey: Survey) {
    return this.http.patch<any>(`${this.url}/api/survey/${survey._id}`, survey, this.options).publishReplay(1).refCount();
  }

  unassignSurvey(survey: Survey) {
    return this.http.delete<any>(`${this.url}/api/survey/assign/${survey._id}`, this.options).publishReplay(1).refCount();
  }

  rateSurvey(rate: Rate) {
    console.log('.............', rate);
    return this.http.post<any>(`${this.url}/api/rate`, rate, this.options).publishReplay(1).refCount();
  }

}
