import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
import { Perfil, User } from '../../../models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  user!:User; 
  perfil!:Perfil;
  constructor(private auth:AuthService,private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.auth.usuario;
  }
  loadingProfile(){
    this.userService.getProfileByUsername(this.user.username).subscribe((resp:any)=>{
      this.userService.guardarPerfil(resp.perfil);
      this.perfil = this.userService.perfil; 
      
    })
  }
}
