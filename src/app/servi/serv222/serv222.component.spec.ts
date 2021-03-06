import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serv222Component } from './serv222.component';

describe('Serv222Component', () => {
  let component: Serv222Component;
  let fixture: ComponentFixture<Serv222Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serv222Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serv222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
