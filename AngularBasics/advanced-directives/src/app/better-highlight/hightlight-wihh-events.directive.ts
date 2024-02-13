import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightWihhEvents]'
})
export class HightlightWihhEventsDirective {

  bindingHost = true;
  /*
  //using HostBinding  decorator to bind events with Host properties
  using camelCase style properties bcoz accessing DOM 
  initially need to assign vlaues fro color
  */
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef,private renderer: Renderer2) { }

  
      //using HostListener to hover over the element to highlight
    @HostListener('mouseenter') mouseover(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','coral');
      
      //using HostListener with HostBinding property to hover over the element to highlight
      this.backgroundColor = 'cadetblue';
    }

    @HostListener('mouseleave') mouseleave(eventData: Event){
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
      
      //using HostListener with HostBinding property to hover over the element to highlight
      this.backgroundColor = 'transparent';
    }



}
