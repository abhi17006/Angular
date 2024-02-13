import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHightlight]'
  })

  export class BasicHightlightDirective implements OnInit {

    constructor(private elRef: ElementRef) { 
        }
    ngOnInit(){
        this.elRef.nativeElement.style.backgroundColor = 'yellow';
    }
    
  }