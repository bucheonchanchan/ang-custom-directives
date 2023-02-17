import { Directive, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[propertyB]'
})
export class BDirective {
  @Input('propertyB') property!: boolean | string;

  constructor() { }

  ngOnChanges(){
    console.log('bDirective propertyB: ', this.property);
  }

}
