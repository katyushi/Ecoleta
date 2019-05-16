import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecilacveisMetalPage } from './recilacveis-metal.page';

describe('RecilacveisMetalPage', () => {
  let component: RecilacveisMetalPage;
  let fixture: ComponentFixture<RecilacveisMetalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecilacveisMetalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecilacveisMetalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
