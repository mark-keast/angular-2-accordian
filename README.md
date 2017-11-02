# Angular accordian

An npm Package Angualr 2 accordian.

## Basic Usage

This example has four accordion's
```html
<ng-accordian [closeOthers]="true">
  <ng-accordian-group heading="About us">
    We are started stradding in...........
  </ng-accordian-group>
  <ng-accordian-group heading="Contact Details">
    <ul>
    <li>85 Accasia Road</li>
    <li>Shirehampton</li>
    <li>London</li>
    </ul>    
  </ng-accordian-group>
  <ng-accordian-group heading="Refund Policy">
    <p>All refunds are covered up till.....</p>
  </ng-accordian-group>
  <ng-accordian-group heading="Delivery">
    Delivery times.
    ...............
  </ng-accordian-group>
</ng-accordian>
```

## Install

use the npm install --save to add it.
```html
$ npm install angular-2-accordian --save
```

## Add the Module to your App or Shared component

Add to the Shared module.
```html
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
..........
import { AccordianModule } from 'angular-2-accordian/mk-accordian/accordian.module';

@NgModule({
  imports: [
  CommonModule,
  AccordianModule],
  declarations: [
    ......
    ],
  exports: [
    CommonModule,
    .......,
    AccordianModule
    ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}

```


## Make sure component has the Shared module.

Add to the Shared module to page requiring the accordian (eg AboutComponent)
```html
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
........
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }

```

## Html rendering of accordian on About page.

Html to page.
```html
<h1>About us</h1>
<ng-accordian [closeOthers]="true">
  <ng-accordian-group heading="Heading one">
    Content one
  </ng-accordian-group>
  <ng-accordian-group heading="Heading two">
    Content Two<
  </ng-accordian-group>
  <ng-accordian-group heading="Heading three">
    Content three
  </ng-accordian-group>
  <ng-accordian-group heading="Heading four">
    Content four
  </ng-accordian-group>
</ng-accordian>

```

## Module not found 
If after your install, you are getting module not found, you will need to update the project.config.ts file
```html
      {
        name: 'angular-2-accordian',
        path: 'node_modules/angular-2-accordian',
        packageMeta: {
          main: 'accordian.module.js',
          defaultExtension: 'js'
        }
      },
```

