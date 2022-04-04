import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { URL_BACKEND } from '../../config/config';
import { Perfil, User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url_base:string = URL_BACKEND+'api/';
  constructor(private http:HttpClient, private router: Router,
          private authService:AuthService) { }

  private _perfil!:Perfil;
  
  get perfil(){
    if(!this._perfil){
      this.renovarPerfil(); 
    }
    return this._perfil; 
  }

  guardarPerfil(perfil:Perfil){
    this._perfil = perfil; 
  }
  renovarPerfil(){
    this.getProfileByUsername(this.authService.usuario.username).subscribe((resp:any)=>{
      this._perfil = resp.perfil as Perfil; 
    })
  }

  getProfileByUsername(username:string){
    const token = this.authService.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this.http.get(this.url_base+'user/profile/'+username,{headers:headers})
  }

  saveProfile(perfil:Perfil){
    const token = this.authService.token;
    const userSend:User = new User(); 
    userSend.username = perfil.usuario?.username || '';
    
    perfil.usuario = userSend; 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    console.log(perfil)
    return this.http.post(this.url_base+'user/profile',perfil,{headers:headers});
  }
  
}
