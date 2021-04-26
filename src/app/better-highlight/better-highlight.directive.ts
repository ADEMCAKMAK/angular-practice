import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private renderer: Renderer2, private elemRef: ElementRef) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }

}
