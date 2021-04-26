import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }


}
