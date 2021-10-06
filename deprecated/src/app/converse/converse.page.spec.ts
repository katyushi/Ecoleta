import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversePage } from './converse.page';

describe('ConversePage', () => {
  let component: ConversePage;
  let fixture: ComponentFixture<ConversePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
