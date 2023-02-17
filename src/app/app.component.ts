import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-parent></app-parent>

    <fieldset>
      <legend><h1>Custom Structural Directive</h1></legend>
     
      <h4>[1] With asterisk(*)</h4>
      <p *ngIf="true">1. NgIf TRUE</p>
      <p *ngIf="false">1. NgIf FALSE</p>
      <hr>
      <h4>[2] With bracket([ ]) in ng-template</h4>
      <ng-template [ngIf]="true">2. NgIf TRUE</ng-template>
      <ng-template [ngIf]="false">2. NgIf FALSE</ng-template>
      <hr>
      <h4>[3] Cusom Directive</h4>
      <p *appIf="true">3. appIf TRUE</p>
      <p *appIf="false">3. appIf FALSE</p>
      <br>
      <input id="showInput" [(ngModel)]="showInput" type="checkbox">
      <label for="showInput">Show conditional header</label>
      <h4 *appIf="showInput">보여라 얍!</h4>
    </fieldset>

    <fieldset>
      <legend><h1>Custom Attribute Directive</h1></legend>

      <p setBackground>background color change test</p>
    </fieldset>

    <fieldset>
      <legend><h1>HostBinding HostListener Decorator</h1></legend>

      <p setHighlight>hightlight color change test</p>
    </fieldset>

    <fieldset>
      <legend><h1>Renderer2</h1></legend>

      <p manipulate>manipulate style, attribute and className</p>
    </fieldset>
  `
})
export class AppComponent {
  showInput: boolean = false;

  ngDoCheck(){
    console.log("CD실행됨");
  }
}
