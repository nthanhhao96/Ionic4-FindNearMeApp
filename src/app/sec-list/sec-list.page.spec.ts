import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecListPage } from './sec-list.page';

describe('SecListPage', () => {
  let component: SecListPage;
  let fixture: ComponentFixture<SecListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
