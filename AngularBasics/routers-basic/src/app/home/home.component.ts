import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService){}

onLoadServer(id: number) {
  //add addition details through navigate, with array, queyParams, fragment
  this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'});
}

onLogin(){
  this.authService.login();

}
onLogout(){
  this.authService.logout();
}

}
