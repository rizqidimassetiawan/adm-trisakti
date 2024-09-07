import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMapProdiMinatComponent } from './adm-map-prodi-minat.component';

describe('AdmMapProdiMinatComponent', () => {
  let component: AdmMapProdiMinatComponent;
  let fixture: ComponentFixture<AdmMapProdiMinatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMapProdiMinatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMapProdiMinatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
