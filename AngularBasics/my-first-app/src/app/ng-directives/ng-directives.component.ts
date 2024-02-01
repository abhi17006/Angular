import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverCreated = false;
  serverName = 'ABCSERVER';

  servers = ["TestServer1", "Ts2", "TS3"];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was creted!";
  }

  //ng-Style code

  serverId: number =10;
  //autoamtically pick type
  serverStatus = 'offline';

  getServerStatus(){
      return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
