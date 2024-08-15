import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpPaymentDataComponent } from './adm-mp-payment-data.component';

describe('AdmMpPaymentDataComponent', () => {
  let component: AdmMpPaymentDataComponent;
  let fixture: ComponentFixture<AdmMpPaymentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpPaymentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpPaymentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
