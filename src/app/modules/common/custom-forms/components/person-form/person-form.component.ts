import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/models/interfaces/user.interface';
import { User } from 'src/app/models/view-models/user.model';
import { EditorMode } from 'src/app/models/enums/editor-mode.enum';

@Component({
    selector: 'app-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
    // private registrationInfo: RegistrationInfoModel = new RegistrationInfoModel();
    @Input() model: IUser;
    @Input() mode: EditorMode;
    @Output() submitEmitter: EventEmitter<IUser> = new EventEmitter();
    @Output() cancelEmitter: EventEmitter<{}> = new EventEmitter();
    private hide = true;

    public personForm: FormGroup = this.formBuilder.group({
        name: ['', Validators.compose([
            Validators.required
        ])],
        email: ['',  Validators.compose([
            Validators.required,
            Validators.email
        ])],
        password: [''],
        roles: ['', Validators.required],
        disciplines: ['', Validators.required],
        college: ['', Validators.required]
    });

    public getPersonControl(fieldName: string): AbstractControl {
        return this.personForm.get(fieldName);
    }

    constructor(private readonly httpService: HttpClient,
                private readonly formBuilder: FormBuilder) { }


    onSubmit() {
        this.submitEmitter.emit({...this.model, ...this.personForm.value});
    }

    ngOnInit(): void {
        this.personForm.patchValue(this.model);
    }
}
