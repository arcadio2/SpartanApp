import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User, Perfil } from '../../../models/user.model';
import { URL_BACKEND } from '../../../config/config';
import { UserService } from '../../services/user.service';

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
  constructor(public usuarioService:UserService) { }

  ngOnInit(): void {
    console.log("hola")
    this.items = [
      {
        label:'Inicio',
        icon:'pi pi-home',
        routerLink:'/user'
      },
      {
        label:'Lista de ejercicios',
        icon:'pi pi-users',
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
