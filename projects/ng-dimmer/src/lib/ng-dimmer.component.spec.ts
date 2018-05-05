import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NgDimmerComponent } from './ng-dimmer.component';


describe('NgDimmerComponent', () => {
  let component: NgDimmerComponent;
  let fixture: ComponentFixture<NgDimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('txColor should be #000', () => {
    component.txColor = '#000';
    expect(component.txColor).toEqual('#000');
  });

  it('bgColor should be red', () => {
    component.bgColor = 'red';
    expect(component.bgColor).toEqual('red');
  });

  it('bgOpacity should be 0.4', () => {
    component.bgOpacity = 0.4;
    expect(component.bgOpacity).toEqual(0.4);
  });

  it('div should have dimmer class', () => {    
    const debugElm: DebugElement = fixture.debugElement;    
    const div = debugElm.nativeElement.querySelector('div');
    expect(div.className).toEqual('dimmer');    
  });

});
