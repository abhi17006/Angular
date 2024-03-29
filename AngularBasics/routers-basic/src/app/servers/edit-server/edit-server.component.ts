import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactiveGuard } from '../../form-deactive.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css'
})
export class EditServerComponent implements OnInit, CanComponentDeactiveGuard {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.route.queryParams.subscribe(
      (queryParam: Params) =>{
        this.allowEdit = queryParam['allowEdit'] === '1' ? true: false;
      }
    );
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    //to update cuurent values on the page
    this.route.params.subscribe(
      (params: Params)=>{
        this.server = this.serversService.getServer(+params['id']);
      }
    );
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved=true;
    //navigate to current active route
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate() {

    if(!this.allowEdit){
      return true;
    }

    //serverName two-way binding property
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved){
        return confirm('Do you want to discard the changes?');
      }else{
        return true;
      }
  }

}
