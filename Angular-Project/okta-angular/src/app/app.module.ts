import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import OktaAuth from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { Router } from '@angular/router';
import myconfig from './config/myconfig';
import { APP_BASE_HREF } from '@angular/common';

// const config = myconfig.oidc;
// const oktaAuth = new OktaAuth(config);

// const oktConfig = Object.assign({
//   onAuthRequired :(oktaAuth: OktaAuth, injector: Injector) =>{
//     const router = injector.get(Router);
//     // Redirect the user to your custom login page
//     router.navigate(['/login']);
//   }
// }, myconfig.oidc)
 
const appBaseHref = '/';
  

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule.forRoot()
  ],
  providers: [
   //new code for sign-in-wideget working code
    {
      provide: OKTA_CONFIG,
      useFactory: ()=>{
        const oktaAuth = new OktaAuth(myconfig.oidc);
        return {
          oktaAuth,
          onAuthRequired: (oktaAuthA: OktaAuth, injector: Injector) =>{
            
               // Redirect the user to your custom login page
              const router = injector.get(Router);
              router.navigate(['/login']);
       
          }
        }
      }
    },
    {provide: APP_BASE_HREF, useValue: appBaseHref}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
