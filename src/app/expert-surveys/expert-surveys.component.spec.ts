import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSurveysComponent } from './expert-surveys.component';

describe('ExpertSurveysComponent', () => {
  let component: ExpertSurveysComponent;
  let fixture: ComponentFixture<ExpertSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
