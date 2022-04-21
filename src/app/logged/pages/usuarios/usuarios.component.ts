import { Component, OnInit } from '@angular/core';
import { Perfil, User } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {


  perfiles:Perfil[] = [];
  usuarios:User[] = [];  
  constructor(private userService:UserService,private auth:AuthService) { }

  ngOnInit(): void {
    this.llenarUsuarios()
  }

  llenarUsuarios(){
    this.userService.getUsuariosByRole('ROLE_USER').subscribe(resp=>{
      this.usuarios = resp as User[]; 
    })
  }
  lenarPerfiles(){
    this.userService.getProfilesByRole('ROLE_USER').subscribe(resp=>{
      this.perfiles = resp as Perfil[]; 
    })
  }

}
