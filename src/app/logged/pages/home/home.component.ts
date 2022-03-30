import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User, Perfil } from '../../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!:User; 
  perfil!:Perfil;
  constructor(private auth:AuthService,private userService:UserService) { }


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
      console.log(resp)
    })
  }

}
