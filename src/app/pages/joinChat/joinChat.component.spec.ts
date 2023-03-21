/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JoinChatComponent } from './joinChat.component';

describe('JoinChatComponent', () => {
  let component: JoinChatComponent;
  let fixture: ComponentFixture<JoinChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
