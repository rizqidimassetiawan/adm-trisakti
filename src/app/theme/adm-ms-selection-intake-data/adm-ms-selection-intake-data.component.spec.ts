import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMsSelectionIntakeDataComponent } from './adm-ms-selection-intake-data.component';

describe('AdmMsSelectionIntakeDataComponent', () => {
  let component: AdmMsSelectionIntakeDataComponent;
  let fixture: ComponentFixture<AdmMsSelectionIntakeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdmMsSelectionIntakeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMsSelectionIntakeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
