import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMpDocumentDataComponent } from './adm-mp-document-data.component';

describe('AdmMpDocumentDataComponent', () => {
  let component: AdmMpDocumentDataComponent;
  let fixture: ComponentFixture<AdmMpDocumentDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMpDocumentDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMpDocumentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
