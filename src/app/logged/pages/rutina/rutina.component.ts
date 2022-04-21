import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Perfil, Rutina, User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {


  perfil!:Perfil; 
  usuario!:User;
  rutinas:Rutina[] = []; 
  constructor(private auth:AuthService, private userService:UserService) { 
    this.usuario = this.auth.usuario; 
  }

  ngOnInit(): void {
    this.cargarPerfil(); 
  }

  cargarPerfil(){
    this.userService.getProfileByUsername(this.usuario.username).subscribe((resp:any)=>{
      this.perfil = resp.perfil as Perfil; 
      this.rutinas = this.perfil.rutinas!;
      console.log(this.rutinas)
    })
  }




}
