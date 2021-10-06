import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecilacveisPlasticoPage } from './recilacveis-plastico.page';

describe('RecilacveisPlasticoPage', () => {
  let component: RecilacveisPlasticoPage;
  let fixture: ComponentFixture<RecilacveisPlasticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecilacveisPlasticoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecilacveisPlasticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
