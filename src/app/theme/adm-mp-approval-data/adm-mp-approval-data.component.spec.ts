import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpApprovalDataComponent } from './adm-mp-approval-data.component';

describe('AdmMpApprovalDataComponent', () => {
  let component: AdmMpApprovalDataComponent;
  let fixture: ComponentFixture<AdmMpApprovalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpApprovalDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpApprovalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
