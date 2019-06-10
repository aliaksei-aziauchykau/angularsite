import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/publishReplay';

import { Survey } from '../model/survey';
import { Rate } from '../model/rate';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SurveyService {

    url: string = '';
    options = { headers: new HttpHeaders({ Authorization: localStorage.currentUser }) };

    constructor(
        private http: HttpClient
    ) {
        this.url = environment.apiServer;
    }

    static getDisciplines(): { key: string, value: string }[] {
        return [
            {
                key: 'archeologia',
                value: 'Archeologia'
            }, // archeology -->
            {
                key: 'architektura i urbanistyka',
                value: 'Architektura i urbanistyka'
            }, // Architecture and urban planning -->
            {
                key: 'astronomia ',
                value: 'Astronomia'
            }, // astronomy -->
            {
                key: 'automatyka, elektronika i elektrotechnika',
                value: 'Automatyka, elektronika i elektrotechnika '
            }, // automation, electronics and electrical engineering -->
            {
                key: 'ekonomia i finanse',
                value: 'Ekonomia i finanse'
            }, // economics and finance -->
            {
                key: 'filozofia',
                value: 'Filozofia'
            }, // philosophy -->
            {
                key: 'geografia społeczno-ekonomiczna i gospodarka przestrzenna ',
                value: 'geografia społeczno-ekonomiczna i gospodarka przestrzenna'
            }, // socio-economic geography and spatial economy -->
            {
                key: 'historia',
                value: 'Historia'
            }, // history -->
            {
                key: 'informatyka',
                value: 'Informatyka'
            }, // Informatics -->
            {
                key: 'informatyka techniczna i telekomunikacja',
                value: 'Informatyka techniczna i telekomunikacja'
            }, // technical IT and telecommunications -->
            {
                key: 'inżynieria biomedyczna',
                value: 'Inżynieria biomedyczna'
            }, // biomedical engineering -->
            {
                key: 'inżynieria chemiczna',
                value: 'Inżynieria chemiczna'
            }, // chemical engineering -->
            {
                key: 'inżynieria lądowa i transport',
                value: 'Inżynieria lądowa i transport'
            }, // civil engineering and transport -->
            {
                key: 'inżynieria materiałowa',
                value: 'Inżynieria materiałowa'
            }, // Material Engineering -->
            {
                key: 'inżynieria mechaniczna',
                value: 'Inżynieria mechaniczna'
            }, // Mechanical engineering -->
            {
                key: 'inżynieria środowiska, górnictwo i energetyka ',
                value: 'Inżynieria środowiska, górnictwo i energetyka '
            }, // environmental engineering, mining and energy -->
            {
                key: 'językoznawstwo',
                value: 'Językoznawstwo'
            }, // linguistics -->
            {
                key: 'literaturoznawstwo',
                value: 'Literaturoznawstwo'
            }, // literature -->
            {
                key: 'matematyka',
                value: 'Matematyka'
            }, // maths -->
            {
                key: 'nauki biologiczne',
                value: 'Nauki biologiczne'
            }, // biological sciences -->
            {
                key: 'nauki chemiczne',
                value: 'Nauki chemiczne'
            }, // chemical sciences -->
            {
                key: 'nauki farmaceutyczne',
                value: 'Nauki farmaceutyczne'
            }, // pharmaceutical sciences -->
            {
                key: 'nauki fizyczne',
                value: 'Nauki fizyczne'
            }, // physical sciences -->
            {
                key: 'nauki leśne',
                value: 'Nauki leśne'
            }, // forestry sciences -->
            {
                key: 'nauki medyczne',
                value: 'Nauki medyczne'
            }, // medical sciences -->
            {
                key: 'nauki o bezpieczeństwie',
                value: 'Nauki o bezpieczeństwie'
            }, // security studies -->
            {
                key: 'nauki o komunikacji społecznej i mediach',
                value: 'Nauki o komunikacji społecznej i mediach'
            }, // learning about social communication and media -->
            {
                key: 'nauki o kulturze fizycznej',
                value: 'Nauki o kulturze fizycznej'
            }, // physical culture studies -->
            {
                key: 'nauki o kulturze i religii',
                value: 'Nauki o kulturze i religii'
            }, // science about culture and religion -->
            {
                key: 'nauki o polityce i administracji',
                value: 'Nauki o polityce i administracji'
            }, // Politics and administration -->
            {
                key: 'nauki o sztuce',
                value: 'Nauki o sztuce'
            }, // art sciences -->
            {
                key: 'nauki o zarządzaniu i jakości',
                value: 'Nauki o zarządzaniu i jakości '
            }, // learning about management and quality -->
            {
                key: 'nauki o zdrowiu',
                value: 'Nauki o zdrowiu'
            }, // health sciences -->
            {
                key: 'nauki o Ziemi i środowisku ',
                value: 'Nauki o Ziemi i środowisku '
            }, // science about the Earth and the environment -->
            {
                key: 'nauki prawne',
                value: 'Nauki prawne'
            }, // law sciences -->
            {
                key: 'nauki socjologiczne',
                value: 'Nauki socjologiczne'
            }, // sociological sciences -->
            {
                key: 'pedagogika',
                value: 'Pedagogika'
            }, // pedagogical sciences -->
            {
                key: 'prawo kanoniczne',
                value: 'Prawo kanoniczne'
            }, // The canonic law -->
            {
                key: 'psychologia',
                value: 'Psychologia'
            }, // psychology -->
            {
                key: 'rolnictwo i ogrodnictwo',
                value: 'Rolnictwo i ogrodnictwo'
            }, // agriculture and gardening -->
            {
                key: 'sztuki filmowe i teatralne',
                value: 'Sztuki filmowe i teatralne'
            }, // film and theater arts -->
            {
                key: 'sztuki muzyczne',
                value: 'Sztuki muzyczne'
            }, // musical art -->
            {
                key: 'sztuki plastyczne i konserwacja dzieł sztuki',
                value: 'Sztuki plastyczne i konserwacja dzieł sztuki'
            }, // fine arts and conservation of works of art -->
            {
                key: 'technologia żywności i żywienia ',
                value: 'Technologia żywności i żywienia'
            }, // food and nutrition technology -->
            {
                key: 'weterynaria',
                value: 'Weterynaria'
            }, // veterinary medicine -->
            {
                key: 'zootechnika i rybactwo',
                value: 'Zootechnika i rybactwo'
            } // zootechnics and fishing -->
        ];
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
        console.log('.............',
            rate);
        return this.http.post<any>(`${this.url}/api/rate`, rate, this.options).publishReplay(1).refCount();
    }

}
