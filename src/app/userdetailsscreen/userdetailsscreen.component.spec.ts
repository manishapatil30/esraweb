import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsscreenComponent } from './userdetailsscreen.component';

describe('UserdetailsscreenComponent', () => {
  let component: UserdetailsscreenComponent;
  let fixture: ComponentFixture<UserdetailsscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailsscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
