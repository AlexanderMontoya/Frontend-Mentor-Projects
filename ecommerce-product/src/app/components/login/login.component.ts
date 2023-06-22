import { Component,Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user={
    email:'montis123@gmail.com',
    password:'montisman123'
  }

  constructor(public userService:UserService, private router:Router){}

  login(){
    this.userService.login(this.user.email,this.user.password);
  }

  register(){
    this.userService.windows.login = false;
    this.userService.windows.register = true;
  }

  cerrar(){
    this.userService.windows.login = false;
  }
}
