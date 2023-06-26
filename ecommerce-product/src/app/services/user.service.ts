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
    login: false,
    register: false
  }
  
  errors_messages = {
    email: false,
    password: false
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
        response=>{
          console.log("Se creo el usuario correctamente");
          this.windows.register=false;
          this.windows.login=true;
        },
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
          this.errors_messages = {
            email: false,
            password: false
          }
          this.windows.login=false;
          this.router.navigate(['/products']);
        }
      )
    })
    .catch(error => {
      if (error.code === "auth/wrong-password") {
        console.log("Contraseña incorrecta");
        this.errors_messages.password = true;
      } else if (error.code === "auth/user-not-found"){
        console.log("El usuario no existe");
        this.errors_messages.email = true;
      } else {
        console.log("Error:", error);
        // Aquí puedes manejar otros errores relacionados con el inicio de sesión
      }
    });
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
