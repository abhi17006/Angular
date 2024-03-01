import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {  IsAuthChildGuard, IsAuthGuard } from './auth-guard.service';
import { formDeactiveGuard } from './form-deactive.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { resolveGuard } from './servers/server/server-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id/:name', component: UserComponent}
    ]
  },
  
  {path: 'servers',
    canActivate: [IsAuthGuard],
    canActivateChild: [IsAuthChildGuard],
    component: ServersComponent,
  // add nested routes, child routes
    children: [
      //resolver guard, resolve:{ customeName: resolveFnName}
      {path: ':id', component: ServerComponent, resolve: {server: resolveGuard} },
      {path: ':id/edit', component: EditServerComponent, canDeactivate:[formDeactiveGuard]}
    ]
  },
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message:'Page Not Found'}},
  {path: '**', redirectTo: '/not-found'}
  
];

@NgModule({
  //works as http://localhost:4200/#/
  // imports: [RouterModule.forRoot(routes, {useHash:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
