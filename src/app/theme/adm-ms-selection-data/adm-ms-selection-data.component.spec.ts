import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsSelectionDataComponent } from './adm-ms-selection-data.component';

describe('AdmMsSelectionDataComponent', () => {
  let component: AdmMsSelectionDataComponent;
  let fixture: ComponentFixture<AdmMsSelectionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsSelectionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsSelectionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
