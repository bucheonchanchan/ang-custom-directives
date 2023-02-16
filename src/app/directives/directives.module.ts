import { NgModule } from '@angular/core';
import { IfDirective } from './if.directive';
import { SetBackgroundDirective } from './setBackground.directive';
import { SetHighlightDirective } from './highlight.directive';
import { ManipulateDirective } from './manipulate.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IfDirective,
    SetBackgroundDirective,
    SetHighlightDirective,
    ManipulateDirective
  ],
  exports: [
    IfDirective,
    SetBackgroundDirective,
    SetHighlightDirective,
    ManipulateDirective
  ]
})
export class DirectivesModule { }
