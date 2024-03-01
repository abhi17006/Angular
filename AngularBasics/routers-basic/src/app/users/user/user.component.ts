import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name:string};

  paramSubscription: Subscription;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    //rendering router within the same component using route Observable
    this.paramSubscription =  this.route.params.subscribe(
      (params: Params) =>{
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy(): void {
    //to destory subscribe
    this.paramSubscription.unsubscribe();
  }
}
