import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalDataDetailComponent } from './approval-data-detail.component';

describe('ApprovalDataDetailomponent', () => {
  let component: ApprovalDataDetailComponent;
  let fixture: ComponentFixture<ApprovalDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovalDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
