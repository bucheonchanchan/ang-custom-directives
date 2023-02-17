import { Directive, Input, TemplateRef, OnInit, ViewContainerRef } from '@angular/core';

// Custom Structural Directive
// https://www.youtube.com/watch?v=4ldr69qHY8M

@Directive({
  standalone: true,
  selector: '[appIf]'
})
export class IfDirective implements OnInit {

  // template = view, HTML 덩어리
  // viewContainer = ng-template, wrapper
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }


  // [1]
  // @Input() appIf: boolean = false;

  // ngOnInit(){
  //   if(this.appIf){
  //     this.viewContainer.createEmbeddedView(this.template);
  //   }else{
  //     this.viewContainer.clear();
  //   }
  // }

  // [2]
  ngOnInit(): void { }

  // @Input('appIf') set a (condition: boolean){
  @Input() set appIf (condition: boolean){
    console.log("check~! condition: ", condition);

    if(condition){
      this.viewContainer.createEmbeddedView(this.template);
    }else{
      this.viewContainer.clear();
    }
  }
}
