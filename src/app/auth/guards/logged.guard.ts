import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

  

export class LoggedGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
    private router: Router){

  }

  canActivate(): Observable<boolean > | Promise<boolean > | boolean  {
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/user');
      return false; 
    }
    return true;
  }
  canLoad(): Observable<boolean > | Promise<boolean >| boolean {
    return true;
  }
}
