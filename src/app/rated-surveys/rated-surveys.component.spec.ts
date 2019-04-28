import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedSurveysComponent } from './rated-surveys.component';

describe('RatedSurveysComponent', () => {
  let component: RatedSurveysComponent;
  let fixture: ComponentFixture<RatedSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
