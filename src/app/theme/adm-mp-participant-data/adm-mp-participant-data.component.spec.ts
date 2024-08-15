import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpParticipantDataComponent } from './adm-mp-participant-data.component';

describe('AdmMpParticipantDataComponent', () => {
  let component: AdmMpParticipantDataComponent;
  let fixture: ComponentFixture<AdmMpParticipantDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpParticipantDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpParticipantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
