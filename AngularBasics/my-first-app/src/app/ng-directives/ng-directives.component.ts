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
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = "Server was creted!";
  }


}
