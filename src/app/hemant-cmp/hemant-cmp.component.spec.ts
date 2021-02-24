import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemantCmpComponent } from './hemant-cmp.component';

describe('HemantCmpComponent', () => {
  let component: HemantCmpComponent;
  let fixture: ComponentFixture<HemantCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HemantCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HemantCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
