import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterSchedulesComponent } from './adm-master-schedules.component';

describe('AdmMasterSchedulesComponent', () => {
  let component: AdmMasterSchedulesComponent;
  let fixture: ComponentFixture<AdmMasterSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
