import { Directive } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[propertyA]',
  inputs: ["property: propertyA" ]
})
export class ADirective {
  property!: boolean;

  constructor() { }

  ngOnChanges(){
    console.log('aDirective propertyA: ', this.property);
  }

}
