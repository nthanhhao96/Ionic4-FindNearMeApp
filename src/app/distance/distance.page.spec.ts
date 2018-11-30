import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancePage } from './distance.page';

describe('DistancePage', () => {
  let component: DistancePage;
  let fixture: ComponentFixture<DistancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
