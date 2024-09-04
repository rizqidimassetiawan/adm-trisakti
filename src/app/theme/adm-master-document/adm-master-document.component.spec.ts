import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterDocumentComponent } from './adm-master-document.component';

describe('AdmMasterDocumentComponent', () => {
  let component: AdmMasterDocumentComponent;
  let fixture: ComponentFixture<AdmMasterDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
