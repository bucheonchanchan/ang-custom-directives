import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

// nativeElement로 DOM에 직접적으로 접근하지 않고 DOM을 조작하는 방법이다.
// https://www.youtube.com/watch?v=7LOu-xF9ML0

@Directive({
  standalone: true,
  selector: '[manipulate]'
})
export class ManipulateDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'hello~' );
    this.renderer.addClass(this.element.nativeElement, 'blahblah');
  }
}
