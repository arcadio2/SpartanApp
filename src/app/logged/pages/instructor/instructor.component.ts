import { Component, OnInit } from '@angular/core';
import { User, Perfil } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {
  user!:User; 
  perfil!:Perfil;
  constructor(private auth:AuthService,
      private userService:UserService) { }

  ngOnInit(): void {
    this.loadingUser(); 
    this.loadingProfile(); 
  }
  loadingUser(){
    this.user = this.auth.usuario;
  }
  loadingProfile(){

    this.userService.getProfileByUsername(this.user.username).subscribe((resp:any)=>{
      this.userService.guardarPerfil(resp.perfil);
      this.perfil = this.userService.perfil; 
    })
  }

  asignPerfil(e:Perfil){
    this.perfil = e; 
    
  }
}
