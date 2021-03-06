import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { URL_BACKEND } from '../../config/config';
import { Perfil, User, Subscripcion } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url_base:string = URL_BACKEND+'api/';
  constructor(private http:HttpClient, private router: Router,
          private authService:AuthService) { 
            this.renovarPerfil(); 
          }

  private _perfil!:Perfil;
  
  get perfil(){
    if(!this._perfil){
      this.renovarPerfil(); 
    }
    return this._perfil; 
  }
  set setPerfil(perfil:Perfil){
    this._perfil=perfil;
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
    
    return this.http.post(this.url_base+'user/profile',perfil,{headers:headers});
  }

  edit(perfil:Perfil){
    const token = this.authService.token;
    const userSend:User = new User(); 
    userSend.username = perfil.usuario?.username || '';
    
    perfil.usuario = userSend; 

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    
    return this.http.put(this.url_base+'user/profile',perfil,{headers:headers});
  }

  subirFoto(archivo: File, username:string) {
    let formData = new FormData();
    formData.append("file", archivo);
    formData.append("username", username);
    const token = this.authService.token;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    

    return this.http.post(this.url_base+'usuarios/upload',formData,{headers:headers});
  }
  
  getProfilesByInstructor(instructor:string){
    const token = this.authService.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })
    return this.http.get(this.url_base+'users/alumnos/'+instructor,{headers:headers})
  }

  getProfilesByRole(role:string){
    const token = this.authService.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }); 
    return this.http.get(this.url_base+'users/perfiles/'+role,{headers:headers});
  }
  
  getUsuariosByRole(role:string){
    const token = this.authService.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }); 
    return this.http.get(this.url_base+'users/usuarios/'+role,{headers:headers});
  }

}
