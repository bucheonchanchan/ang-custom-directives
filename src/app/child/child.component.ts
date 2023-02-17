import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-child',
  styleUrls: ['./child.component.css'],
  template: `
    <fieldset>
      <legend>CHILD COMPONENT</legend>
      <p myDirective [myTemplateAttribute]="'123'">TEST</p>
      <hr>
      <label for="test">Change detection check</label>
      <input id="test" type="checkbox" [(ngModel)]="checkBoolean">
      <h4 *appIf="checkBoolean">SHOW SHOW SHOW</h4>
      <hr>
      <input type="text" [(ngModel)]="inputData">
      <span>input: {{inputData}}</span>
      <hr>
      <p [propertyA]="checkBoolean">TEST 01</p>
      <p propertyB="checkBoolean">TEST 02</p>
      <hr>
      <button>버튼</button>
    </fieldset>
  `
})
export class ChildComponent {
  checkBoolean: boolean = false;
  inputData: string = '';

  constructor(private element: ElementRef){ }

}
