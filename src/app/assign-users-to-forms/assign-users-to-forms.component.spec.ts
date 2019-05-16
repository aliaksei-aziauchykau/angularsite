import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignUsersToFormsComponent } from './assign-users-to-forms.component';

describe('AssignUsersToFormsComponent', () => {
  let component: AssignUsersToFormsComponent;
  let fixture: ComponentFixture<AssignUsersToFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignUsersToFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignUsersToFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
