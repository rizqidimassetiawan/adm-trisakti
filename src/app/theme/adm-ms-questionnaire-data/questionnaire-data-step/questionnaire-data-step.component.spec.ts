import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireDataStepComponent } from './questionnaire-data-step.component';

describe('QuestionnaireDataStepComponent', () => {
  let component: QuestionnaireDataStepComponent;
  let fixture: ComponentFixture<QuestionnaireDataStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionnaireDataStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionnaireDataStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
