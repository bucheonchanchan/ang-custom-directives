import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  styleUrls: ['./parent.component.css'],
  template: `
    <fieldset>
      <legend>PARENT COMPONENT</legend>

      <app-child></app-child>
    </fieldset>
  `
})
export class ParentComponent {

}
