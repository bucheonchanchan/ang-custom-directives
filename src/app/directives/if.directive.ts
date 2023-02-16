import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// Custom Structural Directive
// https://www.youtube.com/watch?v=4ldr69qHY8M

@Directive({
  standalone: true,
  selector: '[appIf]'
})
export class IfDirective {

  // template = view, HTML 덩어리
  // viewContainer = ng-template, wrapper
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

  }

  // @Input('appIf') set a (condition: boolean){
  @Input() set appIf (condition: boolean){
    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }
}
