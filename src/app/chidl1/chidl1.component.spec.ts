import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chidl1Component } from './chidl1.component';

describe('Chidl1Component', () => {
  let component: Chidl1Component;
  let fixture: ComponentFixture<Chidl1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chidl1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chidl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
