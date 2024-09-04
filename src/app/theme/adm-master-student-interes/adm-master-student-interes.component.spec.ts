import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterStudentInteresComponent } from './adm-master-student-interes.component';

describe('AdmMasterStudentInteresComponent', () => {
  let component: AdmMasterStudentInteresComponent;
  let fixture: ComponentFixture<AdmMasterStudentInteresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterStudentInteresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterStudentInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
