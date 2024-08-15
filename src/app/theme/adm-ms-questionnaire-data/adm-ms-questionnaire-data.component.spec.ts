import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsQuestionnaireDataComponent } from './adm-ms-questionnaire-data.component';

describe('AdmMsQuestionnaireDataComponent', () => {
  let component: AdmMsQuestionnaireDataComponent;
  let fixture: ComponentFixture<AdmMsQuestionnaireDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsQuestionnaireDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsQuestionnaireDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
