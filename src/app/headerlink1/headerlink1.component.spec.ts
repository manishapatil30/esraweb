import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerlink1Component } from './headerlink1.component';

describe('Headerlink1Component', () => {
  let component: Headerlink1Component;
  let fixture: ComponentFixture<Headerlink1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Headerlink1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Headerlink1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
