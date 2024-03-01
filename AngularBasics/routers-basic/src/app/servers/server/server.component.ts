import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router
    ) { }

  ngOnInit() {
    //convert type string to number
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // //after making changes on the page to update current value
    // this.route.params.subscribe(
    //   (params: Params) =>{
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // );

    //update using dynamic data with Resolver
    this.route.data.subscribe(
      (data: Data) =>{
        //property name must match with routing_module propertyNmae
        this.server = data['server']
      }
    )
  }

  onEditServer() {
    //navigate to current Active route, with using 'preserv' keep current parameters
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }

}
