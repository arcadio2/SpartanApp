import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-landing',
  templateUrl: './menu-landing.component.html',
  styleUrls: ['./menu-landing.component.css']
})
export class MenuLandingComponent implements OnInit {

  constructor() { }
  items!: MenuItem[];
  ngOnInit(): void {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home',routerLink:'/'},
      {label: 'Iniciar sesión', icon: 'pi pi-sign-in',routerLink:'/auth/login'},
      {label: 'Registrarse', icon: 'pi pi-fw pi-pencil',routerLink:'/auth/register'},
      {label: 'Mas información', icon: 'pi pi-fw pi-file'},
      {label: 'Configuraciones', icon: 'pi pi-fw pi-cog'}
    ];
  }

}
