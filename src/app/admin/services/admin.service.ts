import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  get headers(){
    const token = this.authService.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return headers;
  }
  private url_base:string = URL_BACKEND+'api/';
  constructor(private http:HttpClient, private router: Router,
    private authService:AuthService) { }

    getAllUsers(){
      return this.http.get(this.url_base+'users',{headers:this.headers});
    }

}
