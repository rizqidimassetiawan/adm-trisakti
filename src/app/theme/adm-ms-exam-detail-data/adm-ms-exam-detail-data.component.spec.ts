import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsExamDetailDataComponent } from './adm-ms-exam-detail-data.component';

describe('AdmMsExamDetailDataComponent', () => {
  let component: AdmMsExamDetailDataComponent;
  let fixture: ComponentFixture<AdmMsExamDetailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsExamDetailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsExamDetailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
