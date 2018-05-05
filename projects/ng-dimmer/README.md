# NgDimmer

This angular library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

# Installation

To install this library, run:

```bash
$ npm install ng-dimmer --save
```

# Consuming your library

Add NgDimmerModule into your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import ng-dimmer module
import { NgDimmerModule } from 'ng-dimmer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify DimmerModule as an import
    NgDimmerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once it is imported, you can use the ng-dimmer component in your Angular application:

```xml
<!-- You can now use dimmer component in app.component.html -->
<div>
  <h1>
    {{title}}
  </h1>
  <ng-dimmer [txColor]="'#fff'" [bgColor]="'red'" [bgOpacity]="0.7">
    You can add content into the ng-dimmer. It maybe Text html or other component.
  </ng-dimmer>
</div>
```

## Demo

https://ng-dimmer.stackblitz.io


## Github

https://github.com/iamkdev/ng-dimmer

## License

MIT © [Kamal Dev](mailto:hello@iamkdev.com)
