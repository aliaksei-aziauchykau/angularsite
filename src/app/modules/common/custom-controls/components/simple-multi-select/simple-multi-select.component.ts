import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-simple-multi-select',
    templateUrl: './simple-multi-select.component.html',
    styleUrls: ['./simple-multi-select.component.css']
})
export class SimpleMultiSelectComponent implements OnInit {

    @Input() title: string;
    @Input() control: FormControl;
    @Input() data: string;
    @Output() dataChange: EventEmitter<string> = new EventEmitter();

    private get keys(): string[] {
        return Object.keys(this.data);
    }

    constructor() { }

    ngOnInit() {
    }

}
