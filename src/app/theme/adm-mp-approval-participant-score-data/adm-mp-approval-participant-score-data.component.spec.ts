import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpApprovalParticipantScoreDataComponent } from './adm-mp-approval-participant-score-data.component';

describe('AdmMpApprovalParticipantScoreDataComponent', () => {
  let component: AdmMpApprovalParticipantScoreDataComponent;
  let fixture: ComponentFixture<AdmMpApprovalParticipantScoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpApprovalParticipantScoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpApprovalParticipantScoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
