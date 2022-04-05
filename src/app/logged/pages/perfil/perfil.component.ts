import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
import { Perfil, User } from '../../../models/user.model';
import { URL_BACKEND } from '../../../config/config';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user!:User; 
  perfil!:Perfil;
  url_backend:string =  URL_BACKEND;
  constructor(private auth:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.auth.usuario;
    this.loadingProfile();
  }
  loadingProfile(){
    this.userService.getProfileByUsername(this.user.username).subscribe((resp:any)=>{
      this.userService.guardarPerfil(resp.perfil);
      this.perfil = this.userService.perfil; 
      
    })
  }
}
