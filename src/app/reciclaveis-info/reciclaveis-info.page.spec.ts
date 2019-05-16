import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciclaveisInfoPage } from './reciclaveis-info.page';

describe('ReciclaveisInfoPage', () => {
  let component: ReciclaveisInfoPage;
  let fixture: ComponentFixture<ReciclaveisInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciclaveisInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciclaveisInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
