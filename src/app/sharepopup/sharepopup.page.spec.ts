import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharepopupPage } from './sharepopup.page';

describe('SharepopupPage', () => {
  let component: SharepopupPage;
  let fixture: ComponentFixture<SharepopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharepopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharepopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
