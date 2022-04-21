import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../auth/services/auth.service';
import { URL_BACKEND } from '../../../config/config';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {


  alumnos:User[] = []; 
  texto:string=''; 
  url_backend:string =  URL_BACKEND;
  constructor(private userService:UserService,private auth:AuthService) { }

  ngOnInit(): void {
    this.cargarAlumnos(); 
  }

  cargarAlumnos(){
    this.userService.getProfilesByInstructor(this.auth.usuario.username).subscribe(resp=>{
      this.alumnos = resp as User[]; 
      console.log(this.alumnos)
    })

  }

  buscar(){
    
  }

}
