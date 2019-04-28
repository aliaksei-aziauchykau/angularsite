import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurveysComponent } from './new-surveys.component';

describe('NewSurveysComponent', () => {
  let component: NewSurveysComponent;
  let fixture: ComponentFixture<NewSurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
