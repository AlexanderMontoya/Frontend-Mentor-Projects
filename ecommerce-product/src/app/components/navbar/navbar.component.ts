import { Component } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbar:boolean=false;
  links:boolean=false;
  constructor(public loginService:LoginService){}
  open(){
    this.navbar = true;
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  openLinks(){
    this.links = true;
  }

  logout(){
    this.loginService.logout();
  }

}
