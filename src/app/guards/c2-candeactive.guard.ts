import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { C2Component } from '../components/c2/c2.component';

@Injectable({
  providedIn: 'root'
})
export class C2CandeactiveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: C2Component,
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot)  {
    
    return component.checkUpdateFormIsActiveForExitComponent();
  }
  
}
