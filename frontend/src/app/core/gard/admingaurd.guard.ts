import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AdmingaurdGuard implements CanActivate {
  constructor(private auth:UserService , private rout:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean {
    if (!this.auth.isLoggedIn) {
      this.rout.navigate(['login']);
      return false;
    }
    return this.auth.isLoggedIn();

  }
}
