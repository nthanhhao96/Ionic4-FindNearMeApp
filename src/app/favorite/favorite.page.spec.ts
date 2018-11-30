import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePage } from './favorite.page';

describe('FavoritePage', () => {
  let component: FavoritePage;
  let fixture: ComponentFixture<FavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
