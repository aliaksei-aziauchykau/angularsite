import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertRatingComponent } from './expert-rating.component';

describe('ExpertRatingComponent', () => {
  let component: ExpertRatingComponent;
  let fixture: ComponentFixture<ExpertRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
