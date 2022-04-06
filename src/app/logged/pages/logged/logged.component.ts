import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User, Perfil } from '../../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
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

      this.perfil = resp.perfil;
    })
  }

}
