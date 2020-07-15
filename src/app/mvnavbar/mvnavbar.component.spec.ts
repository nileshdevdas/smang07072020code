import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvnavbarComponent } from './mvnavbar.component';

describe('MvnavbarComponent', () => {
  let component: MvnavbarComponent;
  let fixture: ComponentFixture<MvnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
