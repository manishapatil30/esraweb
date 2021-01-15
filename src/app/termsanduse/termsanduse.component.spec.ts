import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsanduseComponent } from './termsanduse.component';

describe('TermsanduseComponent', () => {
  let component: TermsanduseComponent;
  let fixture: ComponentFixture<TermsanduseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsanduseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsanduseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
