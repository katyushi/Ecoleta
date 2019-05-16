import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecilacveisPapelPage } from './recilacveis-papel.page';

describe('RecilacveisPapelPage', () => {
  let component: RecilacveisPapelPage;
  let fixture: ComponentFixture<RecilacveisPapelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecilacveisPapelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecilacveisPapelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
