import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[]=[];
  @Input() user!:User;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Inicio',
        icon:'pi pi-home',
        routerLink:'/user'
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
            routerLink:'/auth'
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
