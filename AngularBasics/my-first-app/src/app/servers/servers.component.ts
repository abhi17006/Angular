import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'ABCSERVER';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was creted!";
  }

  onUpdateServer(event: Event){
    //FETCH event data using $event object in HTML file and below code 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
