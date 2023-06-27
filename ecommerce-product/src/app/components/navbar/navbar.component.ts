import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navbar:boolean=false;
  links:boolean=false;
  constructor(public userService:UserService){}
  open(){
    this.navbar = true;
  }

  estaLogueado(){
    return this.userService.estaLogueado();
  }

  openLinks(){
    if(this.links){
      this.links = false;
    }else{
      this.links = true;
    }
  }

  logout(){
    this.userService.logout();
  }

  goLogin(){
    this.links=false;
    this.userService.windows.login=true;
  }

  goRegister(){
    this.links=false;
    this.userService.windows.register=true;
  }

}
