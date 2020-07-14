import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log(state.url, 'Access denied');
    console.log(next.params);
    console.log(next.queryParams);
    console.log(next.component);
    if (sessionStorage.getItem('loginUser')) {
      return true;
    } else {
      console.log('Hey not logged in...')
      return false;
    }
  }
}
