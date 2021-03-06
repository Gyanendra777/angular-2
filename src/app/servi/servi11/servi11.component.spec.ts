import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servi11Component } from './servi11.component';

describe('Servi11Component', () => {
  let component: Servi11Component;
  let fixture: ComponentFixture<Servi11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servi11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Servi11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
