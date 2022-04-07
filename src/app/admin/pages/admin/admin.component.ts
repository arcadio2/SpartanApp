import { Component, OnInit } from '@angular/core';
import { Perfil, User } from '../../../models/user.model';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../../logged/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
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
