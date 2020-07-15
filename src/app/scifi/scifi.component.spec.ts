import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScifiComponent } from './scifi.component';

describe('ScifiComponent', () => {
  let component: ScifiComponent;
  let fixture: ComponentFixture<ScifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
