import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {


    if (localStorage.getItem('Admin_Token') != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

  canLoad(route: Route): boolean {

    if (localStorage.getItem('Admin_Token') != null) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }



}