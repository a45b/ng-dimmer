import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'ng-dimmer',  
  templateUrl: './ng-dimmer.component.html',
  styles: ['.dimmer {top: 0;left: 0;right: 0;bottom: 0;opacity: 0.4;z-index: 1040;position: absolute;background-color: #000;} :host /deep/ {color: #fff;margin-top: 20%;text-align: center;display: table-cell;vertical-align: middle;}']
})
export class NgDimmerComponent implements OnInit {

  @Input() txColor: string;
  @Input() bgColor: string;
  @Input() bgOpacity: number;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement.parentElement, 'position','relative'      
    );    
  }

}
