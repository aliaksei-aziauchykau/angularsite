import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-discipline-control',
    templateUrl: './discipline-control.component.html',
    styleUrls: ['./discipline-control.component.css']
})
export class DisciplineControlComponent implements OnInit {

    @Input() control: FormControl;
    @Input() data?: string;
    @Output() dataChange: EventEmitter<string> = new EventEmitter();

    public get disciplineKeys() {
        return Object.keys(this.disciplines);
    }

    private readonly disciplines = {
        archeologia: 'Archeologia',
        'architektura i urbanistyka': 'Architektura i urbanistyka',
        astronomia: 'Astronomia,',
        'automatyka, elektronika i elektrotechnika': 'Automatyka, elektronika i elektrotechnika',
        'ekonomia i finanse': 'Ekonomia i finanse,',
        filozofia: 'Filozofia',
        'geografia społeczno-ekonomiczna i gospodarka przestrzenna': 'geografia społeczno-ekonomiczna i gospodarka przestrzenna',
        historia: 'Historia',
        informatyka: 'Informatyka',
        'informatyka techniczna i telekomunikacja': 'Informatyka techniczna i telekomunikacja',
        'inżynieria biomedyczna': 'Inżynieria biomedyczna',
        'inżynieria chemiczna': 'Inżynieria chemiczna',
        'inżynieria lądowa i transport': 'Inżynieria lądowa i transport',
        'inżynieria materiałowa': 'Inżynieria materiałowa',
        'inżynieria mechaniczna': 'Inżynieria mechaniczna',
        'inżynieria środowiska, górnictwo i energetyka': 'Inżynieria środowiska, górnictwo i energetyka',
        językoznawstwo: 'Językoznawstwo',
        literaturoznawstwo: 'Literaturoznawstwo',
        matematyka: 'Matematyka',
        'nauki biologiczne': 'Nauki biologiczne',
        'nauki chemiczne': 'Nauki chemiczne',
        'nauki farmaceutyczne': 'Nauki farmaceutyczne',
        'nauki fizyczne': 'Nauki fizyczne',
        'nauki leśne': 'Nauki leśne',
        'nauki medyczne': 'Nauki medyczne',
        'nauki o bezpieczeństwie': 'Nauki o bezpieczeństwie',
        'nauki o komunikacji społecznej i mediach': 'Nauki o komunikacji społecznej i mediach',
        'nauki o kulturze fizycznej': 'Nauki o kulturze fizycznej',
        'nauki o kulturze i religii': 'Nauki o kulturze i religii',
        'nauki o polityce i administracji': 'Nauki o polityce i administracji',
        'nauki o sztuce': 'Nauki o sztuce',
        'nauki o zarządzaniu i jakości': 'Nauki o zarządzaniu i jakości',
        'nauki o zdrowiu': 'Nauki o zdrowiu',
        'nauki o Ziemi i środowisku': 'Nauki o Ziemi i środowisku',
        'nauki prawne': 'Nauki prawne',
        'nauki socjologiczne': 'Nauki socjologiczne',
        pedagogika: 'Pedagogika',
        'prawo kanoniczne': 'Prawo kanoniczne',
        psychologia: 'Psychologia',
        'rolnictwo i ogrodnictwo': 'Rolnictwo i ogrodnictwo',
        'sztuki filmowe i teatralne': 'Sztuki filmowe i teatralne',
        'sztuki muzyczne': 'Sztuki muzyczne',
        'sztuki plastyczne i konserwacja dzieł sztuki': 'Sztuki plastyczne i konserwacja dzieł sztuki',
        'technologia żywności i żywienia': 'Technologia żywności i żywienia',
        weterynaria: 'Weterynaria',
        'zootechnika i rybactwo': 'Zootechnika i rybactwo',
    };

    constructor() { }

    ngOnInit() {
    }

}
