import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  /* user={
    email:'montis123@gmail.com',
    password:'montisman123'
  } */

  constructor(public userService:UserService,
               private router:Router,
               private formBuilder:FormBuilder){}

  get password(){
    return this.user.get('password') as FormControl;
  }

  get email(){
    return this.user.get('email') as FormControl;
  }

  user= this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',Validators.required]
  })
               

  register(){
    this.userService.register(
      this.user.value.email+'',
      this.user.value.password+''
    );
  }

  cerrar(){
    this.userService.windows.register = false;
  }
}
