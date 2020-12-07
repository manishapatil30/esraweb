import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesalonComponent } from './savesalon.component';

describe('SavesalonComponent', () => {
  let component: SavesalonComponent;
  let fixture: ComponentFixture<SavesalonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavesalonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavesalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
