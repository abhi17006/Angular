import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'okta-angular-quickstart';
 

 
  constructor(private _router: Router, 
    public _oktaStateService: OktaAuthStateService,
     @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth) { }

  async ngOnInit(){
  
  }

  
  public async signIn() {
    await this._oktaAuth.signInWithRedirect();
  }

  public async signOut() {
    await this._oktaAuth.signOut();
  }
}
