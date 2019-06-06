import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMultiSelectComponent } from './simple-multi-select.component';

describe('SimpleMultiSelectComponent', () => {
  let component: SimpleMultiSelectComponent;
  let fixture: ComponentFixture<SimpleMultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMultiSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMultiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
