import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";

export function authenticationAdmin(): CanActivateFn {
    return () => {
      const authService: UserService = inject(UserService);
      const router: Router = inject(Router);
      const httpClient:HttpClient=inject(HttpClient);
  
      return new Promise<boolean>((resolve) => {
        httpClient.get('https://ecommerce-product-233-default-rtdb.firebaseio.com/users.json?auth='+authService.getIdToken()).subscribe(
        content=>{
          if(content){
            resolve(true);    
          }
        },
        error=>{resolve(false); router.navigate(['/productos'])}
        );
    });
  }
}
