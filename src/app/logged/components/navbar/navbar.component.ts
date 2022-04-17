import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User, Perfil } from '../../../models/user.model';
import { URL_BACKEND } from '../../../config/config';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[]=[];
  @Input() user!:User;
  @Input() perfil!:Perfil; 


  url_backend:string =  URL_BACKEND;
  constructor(public usuarioService:UserService, private authService:AuthService) { }

  ngOnInit(): void {
    if(this.authService.isInstructor()){
      this.items = [
        {
          label:'Inicio', 
          icon:'pi pi-home',
          routerLink:'/user/instructor'
        },
        {
          label:'Alumnos',
          icon:'pi pi-users',
          routerLink:'/user/instructor/alumnos'
        },
        {
          label:'Lista de ejercicios',
          icon:'pi pi-list',
          routerLink:'/user/ejercicios'
        },
        {
          label:this.user.nombre,
          icon:'pi pi-cog',
          routerLink:'/user/profile',
        },
        {
          label:'Sesión iniciada',
          icon: 'pi pi-user',
          styleClass:'derecha-p',
          
          items: [
            {
              label:'Editar perfil',
              icon: 'pi pi-sign-in',
              routerLink:'/user/edit'
            },
            {
              label:'Cerrar sesión',
              icon: 'pi pi-user-plus',
              routerLink:'/user/logout'
            },
            ]
        }
      ];
    }else{
      this.items = [
        {
          label:'Inicio', 
          icon:'pi pi-home',
          routerLink:'/user'
        },
        {
          label:'Rutinas',
          icon:'pi pi-heart-fill',
          routerLink:'/user/rutinas'
        },
        {
          label:'Lista de ejercicios',
          icon:'pi pi-list',
          routerLink:'/user/ejercicios'
        },
        {
          label:this.user.nombre,
          icon:'pi pi-cog',
          routerLink:'/user/profile',
        },
        {
          label:'Sesión iniciada',
          icon: 'pi pi-user',
          styleClass:'derecha-p',
          
          items: [
            {
              label:'Editar perfil',
              icon: 'pi pi-sign-in',
              routerLink:'/user/edit'
            },
            {
              label:'Cerrar sesión',
              icon: 'pi pi-user-plus',
              routerLink:'/user/logout'
            },
            ]
        }
      ];
    }
    
  }
}
