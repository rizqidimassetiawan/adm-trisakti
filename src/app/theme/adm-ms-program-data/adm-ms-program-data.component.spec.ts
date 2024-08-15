import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsProgramDataComponent } from './adm-ms-program-data.component';

describe('AdmMsProgramDataComponent', () => {
  let component: AdmMsProgramDataComponent;
  let fixture: ComponentFixture<AdmMsProgramDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsProgramDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsProgramDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
