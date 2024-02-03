import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

  // properties for holding Parent custom  event, call eventEMitter constructor
  @Output() serverCreated =  new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>(); 
  constructor(){}

  ngOnInit(){
  }
  onAddServer() {
    //emits an event that containing values(Passing values) from parent Component
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent:this.newServerContent});
  }
}
