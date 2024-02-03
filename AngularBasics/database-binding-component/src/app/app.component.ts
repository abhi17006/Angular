import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  serverElements = [{type: 'server', name:'Testserver', content:'Just a test!'}]
  constructor(){}
  ngOnInit(){
    
  }
}
