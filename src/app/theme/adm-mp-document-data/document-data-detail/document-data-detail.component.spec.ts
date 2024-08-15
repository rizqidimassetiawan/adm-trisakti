import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDataDetailComponent } from './document-data-detail.component';

describe('DocumentDataDetailComponent', () => {
  let component: DocumentDataDetailComponent;
  let fixture: ComponentFixture<DocumentDataDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentDataDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDataDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
