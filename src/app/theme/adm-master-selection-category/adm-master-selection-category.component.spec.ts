import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterSelectionCategoryComponent } from './adm-master-selection-category.component';

describe('AdmMasterSelectionCategoryComponent', () => {
  let component: AdmMasterSelectionCategoryComponent;
  let fixture: ComponentFixture<AdmMasterSelectionCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterSelectionCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterSelectionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
