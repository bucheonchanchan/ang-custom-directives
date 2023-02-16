import { Directive, ElementRef, OnInit } from '@angular/core';

// Custom Attribute Directive
// https://www.youtube.com/watch?v=DxfAEhdOl_0

@Directive({
    standalone: true,
    selector: '[setBackground]'
})
export class SetBackgroundDirective implements OnInit {
    constructor(
        private element: ElementRef
    ) { }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'red'
    }
}