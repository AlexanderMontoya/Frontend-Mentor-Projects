import { Injectable } from '@angular/core';

import { Router } from '@angular/router';


import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken } from '@angular/fire/auth';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router, private auth:Auth, private cookies:CookieService) { }
  token:string='';

  register(email:string , password:string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email:string , password:string){
    signInWithEmailAndPassword(this.auth,email, password)
    .then(response=>{
      console.log(response);
      getIdToken(response.user).then(
        token=>{
          this.token=token;
          this.cookies.set("token",this.token);
          this.router.navigate(['/products']);
        }
      )
    })
    .catch();
  }

  logout(){
    signOut(this.auth).then(
      ()=>{
        this.token="";
        this.cookies.set("token",this.token);
        window.location.reload();
      }
    ).catch(
      error=>console.log(error)
    );
  }

  getIdToken(){
    /* return this.token; */
    return this.cookies.get('token');
  }

  estaLogueado(){
    /* return this.token; */
    return this.cookies.get('token');
  }
}
