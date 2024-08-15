import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantDataDetailComponent } from './participant-data-detail.component';

describe('ParticipantDataDetailComponent', () => {
  let component: ParticipantDataDetailComponent;
  let fixture: ComponentFixture<ParticipantDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
