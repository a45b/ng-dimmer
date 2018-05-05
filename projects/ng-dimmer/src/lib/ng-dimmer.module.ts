import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDimmerComponent } from './ng-dimmer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgDimmerComponent],
  exports: [NgDimmerComponent]
})
export class NgDimmerModule { }
