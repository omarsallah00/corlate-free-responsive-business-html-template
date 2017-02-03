/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReachUsComponent } from './reach-us.component';

describe('ReachUsComponent', () => {
  let component: ReachUsComponent;
  let fixture: ComponentFixture<ReachUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
