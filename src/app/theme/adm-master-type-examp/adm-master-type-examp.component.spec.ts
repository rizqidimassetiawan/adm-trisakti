import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterTypeExampComponent } from './adm-master-type-examp.component';

describe('AdmMasterTypeExampComponent', () => {
  let component: AdmMasterTypeExampComponent;
  let fixture: ComponentFixture<AdmMasterTypeExampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterTypeExampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterTypeExampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
