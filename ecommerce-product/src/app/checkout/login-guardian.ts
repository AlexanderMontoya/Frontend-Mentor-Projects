import { inject} from '@angular/core';
import { CanActivateFn, Router } from "@angular/router";
import { UserService } from "../services/user.service";

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
