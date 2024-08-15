import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpParticipantScoreDataComponent } from './adm-mp-participant-score-data.component';

describe('AdmMpParticipantScoreDataComponent', () => {
  let component: AdmMpParticipantScoreDataComponent;
  let fixture: ComponentFixture<AdmMpParticipantScoreDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpParticipantScoreDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpParticipantScoreDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
