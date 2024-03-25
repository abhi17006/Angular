
import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import OktaAuth, { AuthState } from '@okta/okta-auth-js';
import { Observable, filter, map } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean;
  userName: string = '';
  error: Error | null = null;

  constructor(private _oktaAuthStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) public oktaAuth: OktaAuth) { }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log("authetication ::"+this.isAuthenticated);
    if (this.isAuthenticated) {
      const userClaims = await this.oktaAuth.getUser();
      this.userName = userClaims.name as string;

  }
}

  // async loginA() {
  //   try {
  //     await this.oktaAuth.signInWithRedirect({ originalUri: '/' });
  //   } catch (err) {
  //     console.error(err);
  //     this.error = err as Error;
  //   }
  // }
}
