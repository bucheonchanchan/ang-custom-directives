import { NgModule } from '@angular/core';
import { IfDirective } from './if.directive';
import { SetBackgroundDirective } from './setBackground.directive';
import { SetHighlightDirective } from './highlight.directive';
import { ManipulateDirective } from './manipulate.directive';
import { CommonModule } from '@angular/common';
import { MyDirective } from './directive.directive';
import { ADirective } from './adirective.directive';
import { BDirective } from './bdirective.directive';
import { ActionDirective } from './action.directive';

@NgModule({
  imports: [
    CommonModule,
    IfDirective,
    SetBackgroundDirective,
    SetHighlightDirective,
    ManipulateDirective,
    MyDirective,
    ADirective,
    BDirective
  ],
  exports: [
    IfDirective,
    SetBackgroundDirective,
    SetHighlightDirective,
    ManipulateDirective,
    MyDirective,
    ADirective,
    BDirective
  ],
  declarations: [
    ActionDirective
  ]
})
export class DirectivesModule { }
