import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsalonComponent } from './editsalon.component';

describe('EditsalonComponent', () => {
  let component: EditsalonComponent;
  let fixture: ComponentFixture<EditsalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditsalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
