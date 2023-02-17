import { Directive, EventEmitter } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[actionDirective]',
  outputs: ['onClick']
})
export class ActionDirective {
  onClick!: EventEmitter<any>;

  constructor() { }

  myFunc(){
    this.onClick.emit("123");
  }

}
