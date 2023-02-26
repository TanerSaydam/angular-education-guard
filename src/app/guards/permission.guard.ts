import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(
    private _router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    let user:any = localStorage.getItem("user");
    if(user){
      let userObje = JSON.parse(user);
      return userObje.isAdmin;
    }

    this._router.navigateByUrl("/");
    return false;
  }
  
}
