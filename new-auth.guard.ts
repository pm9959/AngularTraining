import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class NewAuthGuard implements CanActivate {

  constructor(private _authservice :AuthService)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this._authservice.MemberAuth)
      {
        return true;
      }
      else{
        window.alert("You dont have access!!! Please connect to Administrator ");
        return false;
      }

    
      return true;
  }
  
}
