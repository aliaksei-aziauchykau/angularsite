import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyStepperComponent } from './survey-stepper.component';

describe('SurveyStepperComponent', () => {
  let component: SurveyStepperComponent;
  let fixture: ComponentFixture<SurveyStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
