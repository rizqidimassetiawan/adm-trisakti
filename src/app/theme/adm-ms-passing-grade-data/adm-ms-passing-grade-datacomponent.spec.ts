import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsPassingGradeDataComponent } from './adm-ms-passing-grade-data.component';

describe('AdmMsSelectionScheduleDataComponent', () => {
  let component: AdmMsPassingGradeDataComponent;
  let fixture: ComponentFixture<AdmMsPassingGradeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsPassingGradeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsPassingGradeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
