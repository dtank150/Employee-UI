import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';



@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean |UrlTree{
      return true;
      //return this.authService.isLoggedin();

  }
}
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
