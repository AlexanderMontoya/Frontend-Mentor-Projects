import { inject} from '@angular/core';
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { HttpClient } from '@angular/common/http';

export function authenticationGuard(): CanActivateFn {
    return () => {
      const authService: UserService = inject(UserService);
      const router:Router = inject(Router);
      
      if (!authService.estaLogueado()) {
        router.navigate(['/productos']);
        authService.windows.login = true;
        return false;
      }

      return true;
    };
  }

  export function authenticationGuarda(): CanActivateFn {
    return () => {
      const authService: UserService = inject(UserService);
      const router: Router = inject(Router);
      const httpClient:HttpClient=inject(HttpClient);
  
      return new Promise<boolean>((resolve) => {
        httpClient.get('https://prueba-tienda-42155-default-rtdb.firebaseio.com/users.json?auth='+authService.getIdToken()).subscribe(
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
