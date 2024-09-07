import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMapProdiFormulirComponent } from './adm-map-prodi-formulir.component';

describe('AdmMapProdiFormulirComponent', () => {
  let component: AdmMapProdiFormulirComponent;
  let fixture: ComponentFixture<AdmMapProdiFormulirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMapProdiFormulirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMapProdiFormulirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
