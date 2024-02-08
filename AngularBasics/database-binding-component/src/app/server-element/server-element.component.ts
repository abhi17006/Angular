import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
   Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, 
   OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements
 OnInit, 
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
 {
  //use this property for Parent component add Decorator Input
  //aliase@Input('abc')
  @Input('sevElement') element: { type:string, name:string, content: string}
  @ContentChild('cp') paragraph : ElementRef;

  constructor(){
    console.log("constructor called");
  }

  ngOnChanges( varChanges : SimpleChanges){
    console.log("ngOnChanges called accpet arguments");
    console.log(varChanges);
  }

  ngOnInit(){
    console.log("onNgInit called");
    console.log(this.paragraph);
    console.log("Test Content of Paragraph : " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDocheck called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentINit Called");
    console.log("Test Content of Paragraph : "+this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewInitChecked called");
  }

  ngOnDestroy(): void {
    console.log("ngonDestroy called");
  }
}
