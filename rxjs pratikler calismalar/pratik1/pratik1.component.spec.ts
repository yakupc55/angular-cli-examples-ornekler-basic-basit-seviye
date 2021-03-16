import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pratik1Component } from './pratik1.component';

describe('Pratik1Component', () => {
  let component: Pratik1Component;
  let fixture: ComponentFixture<Pratik1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pratik1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pratik1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
