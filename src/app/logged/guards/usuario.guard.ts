import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService,
    private router: Router){}
  canActivate(): Observable<boolean > | Promise<boolean > | boolean {
    if(!this.authService.isUser()){
      this.router.navigateByUrl("/user/instructor"); 
      return false; 
    }
    return true;
  }
  canLoad(): Observable<boolean > | Promise<boolean > | boolean  {
    if(!this.authService.isUser()){
      this.router.navigateByUrl("/user/instructor"); 
      return false; 
    }
    return true;
  }
}
