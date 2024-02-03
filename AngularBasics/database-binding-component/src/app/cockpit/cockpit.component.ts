import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  newServerContent = '';

  // properties for holding Parent custom  event, call eventEMitter constructor
  @Output() serverCreated =  new EventEmitter<{serverName:string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent:string}>(); 
  constructor(){}

  ngOnInit(){
  }
  //local reference variable 
  onAddServer(nameInput) {
    //emits an event that containing values(Passing values) from parent Component
    this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName: nameInput.value,
      serverContent:this.newServerContent});
  }

  onAddBlueprint(nameInput) {
    this.blueprintCreated.emit({
      // serverName: this.newServerName, using two-way data binding values
      serverName: nameInput.value,
      serverContent:this.newServerContent});
  }
}
