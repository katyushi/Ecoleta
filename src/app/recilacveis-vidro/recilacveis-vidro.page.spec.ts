import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecilacveisVidroPage } from './recilacveis-vidro.page';

describe('RecilacveisVidroPage', () => {
  let component: RecilacveisVidroPage;
  let fixture: ComponentFixture<RecilacveisVidroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecilacveisVidroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecilacveisVidroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
