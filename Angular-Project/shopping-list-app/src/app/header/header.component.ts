import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  //using eventEmitter, @Output decorator make listen properties from parent component to 
  @Output() featureSelected = new EventEmitter<string>();

  //to show feature component receive sring from onSelect()method
  onSelect(feature : string){
    this.featureSelected.emit(feature);
  }
}
