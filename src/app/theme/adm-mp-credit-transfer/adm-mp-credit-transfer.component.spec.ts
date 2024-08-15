import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpCreditTransferComponent } from './adm-mp-credit-transfer.component';

describe('AdmMpCreditTransferComponent', () => {
  let component: AdmMpCreditTransferComponent;
  let fixture: ComponentFixture<AdmMpCreditTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpCreditTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpCreditTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
