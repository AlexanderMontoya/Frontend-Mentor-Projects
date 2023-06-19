import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
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

  constructor(public loginService:LoginService, private router:Router){}

  register(){
    console.log(this.user);
    this.loginService.register(this.user.email,this.user.password).then(response=>{
      console.log(response);
    })
    .catch(error=>console.log(error));
  }
  login(){
    /* this.loginService.login(this.user.email,this.user.password)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/products'])
    })
    .catch(error=>console.log(error)) */
    this.loginService.login(this.user.email,this.user.password);
  }

  logout(){
    this.loginService.logout();
  }
}
