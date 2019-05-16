import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssignedFormsComponent } from './user-assigned-forms.component';

describe('UserAssignedFormsComponent', () => {
  let component: UserAssignedFormsComponent;
  let fixture: ComponentFixture<UserAssignedFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAssignedFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssignedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
