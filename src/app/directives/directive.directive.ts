import { Directive, Input } from '@angular/core';

// [1]
// @Directive({
//   standalone: true,
//   selector: '[myDirective]',
//   inputs: [
//     "myClassProperty: myTemplateAttribute"
//   ]
// })
// export class MyDirective {
//   public myClassProperty!: string;

//   constructor() { }

//   ngOnInit(){
//     console.log('[1] myClassProperty: ', this.myClassProperty);
//   }
// }

// [2]
@Directive({
  standalone: true,
  selector: '[myDirective]'
})
export class MyDirective {  
  @Input('myTemplateAttribute') myClassProperty!: string
  
  ngOnInit(){
    console.log('[2] myClassProperty: ', this.myClassProperty);
  }
}
