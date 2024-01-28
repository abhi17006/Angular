import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent{
serverId: number  =10;
//autoamtically pick type
serverStatus = 'offline';

getServerStatus(){
    return this.serverStatus;
}
}