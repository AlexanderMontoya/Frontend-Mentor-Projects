import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user={
    email:'montis123@gmail.com',
    password:'montisman123'
  }

  constructor(public userService:UserService, private router:Router){}

  register(){
    this.userService.register(this.user.email,this.user.password);
  }

  cerrar(){
    this.userService.windows.register = false;
  }
}
