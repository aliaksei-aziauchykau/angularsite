import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadItemsPresenterControlComponent } from './upload-items-presenter-control.component';

describe('UploadItemsPresenterControlComponent', () => {
  let component: UploadItemsPresenterControlComponent;
  let fixture: ComponentFixture<UploadItemsPresenterControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadItemsPresenterControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadItemsPresenterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
