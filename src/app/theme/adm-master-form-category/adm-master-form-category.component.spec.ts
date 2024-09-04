import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMasterFormCategoryComponent } from './adm-master-form-category.component';

describe('AdmMasterFormCategoryComponent', () => {
  let component: AdmMasterFormCategoryComponent;
  let fixture: ComponentFixture<AdmMasterFormCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmMasterFormCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMasterFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
