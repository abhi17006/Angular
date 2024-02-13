import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
// import Renderer2, ELementRef
  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

ngOnInit(): void {
 this.renderer.setStyle(this.elRef.nativeElement, 'background-color','pink');
}

}
