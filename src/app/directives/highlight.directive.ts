import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

// HostBinding, HostListener Decorator
// https://www.youtube.com/watch?v=blErqI-o1TM

@Directive({
  standalone: true,
  selector: '[setHighlight]'
})
export class SetHighlightDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {

  }

  ngOnInit(){
    // console.log('elementRef: ', this.element.nativeElement);
    // console.log('renderer: ', this.renderer);
  }

  @HostBinding('style.backgroundColor') background: string = 'pink';

  // true와 false로 동적으로 class명을 추가할 수 있다.
  @HostBinding('class') get classList(){
    return { 'TEST-A' : true, 'TEST-B' : true }
  }

  @HostListener('mouseenter') mouseenter(){
    this.background = 'blue';
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = 'pink';
  }
}
