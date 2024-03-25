import { Component, Inject, OnInit } from '@angular/core';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth, Tokens } from '@okta/okta-auth-js';
import OktaSignIn from '@okta/okta-signin-widget';
import myconfig from '../config/myconfig';
import { NavigationStart, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  
  oktaSignin: any;

  //inject OKTA auth service
  constructor(@Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
  ){
   
    this.oktaSignin = new OktaSignIn({
      el: '#sign-in-widget',
      //fetch info from myCOnfig class
      //logo: 'assets/images/logo.png', //provide logo
      baseUrl: myconfig.oidc.issuer.split('/oauth2')[0],
      clientId: myconfig.oidc.clientId,
      redirectUri: myconfig.oidc.redirectUri,
      authParams: {
        pkce:true,
        issuer: myconfig.oidc.issuer,
        scopes: myconfig.oidc.scopes
      }
    });
  }

  async ngOnInit(){
    
    this.oktaSignin.remove(); //remove previous signIn
    
    //using interation code must checked with grant types AuthorizationCode, Refresh token
    this.oktaSignin.showSignInToGetTokens({
      el: '#sign-in-widget', // this name should be same as div tag in the login.component.html
      scopes: myconfig.oidc.scopes
    }).then((tokens: Tokens) => {
        console.log("response :"+tokens);
        this.oktaAuth.handleLoginRedirect(tokens);
        
      }).catch( (error: any) => {
        throw error;
      });
    
  }

  
  ngOnDestroy() {
    this.oktaSignin.remove();
  }
}
