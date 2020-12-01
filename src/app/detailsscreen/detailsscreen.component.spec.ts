import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsscreenComponent } from './detailsscreen.component';

describe('DetailsscreenComponent', () => {
  let component: DetailsscreenComponent;
  let fixture: ComponentFixture<DetailsscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
