import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplineControlComponent } from './discipline-control.component';

describe('DisciplineControlComponent', () => {
  let component: DisciplineControlComponent;
  let fixture: ComponentFixture<DisciplineControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplineControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplineControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
