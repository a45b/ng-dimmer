import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgDimmerModule } from 'ng-dimmer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgDimmerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
