import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDataParticipantComponent } from './questionnaire-data-participant.component';

describe('QuestionnaireDataParticipantComponent', () => {
  let component:QuestionnaireDataParticipantComponent;
  let fixture: ComponentFixture<QuestionnaireDataParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionnaireDataParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDataParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
