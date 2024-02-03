import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
  //use this property for Parent component add Decorator Input
  //aliase@Input('abc')
  @Input('sevElement') element: { type:string, name:string, content: string}

  constructor(){}

  ngOnInit(){
  }
}
