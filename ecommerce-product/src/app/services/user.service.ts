import { Injectable } from '@angular/core';

import { Router } from '@angular/router';


import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getIdToken } from '@angular/fire/auth';

import { CookieService } from 'ngx-cookie-service';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private router:Router, 
              private auth:Auth, 
              private cookies:CookieService, 
              private httpClient:HttpClient) { }

  token:string='';

  windows={
    login: true,
    register: false
  }

  register(email:string , password:string){
    createUserWithEmailAndPassword(this.auth, email, password)
    .then(response=>{
      console.log(response);
      const user={
        email: email,
        role: 'normal'
      }
      this.httpClient.put('https://prueba-tienda-42155-default-rtdb.firebaseio.com/users/'+response.user.uid+'.json', user).subscribe(
        response=>console.log("Se creo el usuario correctamente"),
        error=>console.log("Error: "+error),
      );
    })
    .catch(error=>console.log(error));
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
