import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsSelectionScheduleDataComponent } from './adm-ms-selection-schedule-data.component';

describe('AdmMsSelectionScheduleDataComponent', () => {
  let component: AdmMsSelectionScheduleDataComponent;
  let fixture: ComponentFixture<AdmMsSelectionScheduleDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsSelectionScheduleDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsSelectionScheduleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
