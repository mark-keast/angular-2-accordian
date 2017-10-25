# Angular accordian

An npm Package Angualr 2 accordian.

## Basic Usage

This example has four accordion's
```html
<ng-accordian [closeOthers]="true">
  <ng-accordian-group heading="heading one">
    content one
  </ng-accordian-group>
  <ng-accordian-group heading="heading two">
    <p>Ready to go, statically typed build system using Gulp for working with TypeScript.
    Production and development builds.
    Sample unit tests with Jasmine and Karma including code coverage via Istanbul.
    End-to-end tests with Protractor.</p>

    <p>Ready to go, statically typed build system using Gulp for working with TypeScript.
    Production and development builds.
    Sample unit tests with Jasmine and Karma including code coverage via Istanbul.
    End-to-end tests with Protractor.</p>    
  </ng-accordian-group>
  <ng-accordian-group heading="heading three">
    content three
  </ng-accordian-group>
  <ng-accordian-group heading="heading four">
    content four
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

add to the Shared module.
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

## Html rendering of accordian.

Add html to page.
```html
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

