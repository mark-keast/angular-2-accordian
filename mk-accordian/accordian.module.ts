import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianGroupComponent } from './accordian-group.component';
import { AccordianComponent } from './accordian.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordianComponent,
    AccordianGroupComponent
  ],
  exports: [
    AccordianComponent,
    AccordianGroupComponent
  ]
})
export class AccordianModule { }