import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  items: MenuItem[]=[];
  constructor(private authService:AuthService) { }
  usuario!:User;

  ngOnInit(): void {
    this.obtenerUsuario(); 
    if(this.usuario.nombre){
      this.items = [
      
        {
          label:'xed',
          icon:'pi pi-cog',
          routerLink:'ordenar',
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
              routerLink:'/auth/logout'
            },
            ]
        }
      ];
    }else{
      this.items = [
      
        {
          label:'xed',
          icon:'pi pi-cog',
          routerLink:'ordenar',
        },
        {
          label:'Sesión no iniciada',
          icon: 'pi pi-user',
          styleClass:'derecha-p',
          
          items: [
            {
              label:'Iniciar sesión',
              icon: 'pi pi-sign-in',
              routerLink:'/auth'
            },
            {
              label:'Registrarse',
              icon: 'pi pi-user-plus',
              routerLink:'/auth/register'
            },
            ]
        }
      ];
    }
    


  }

  obtenerUsuario(){
    this.usuario=this.authService.usuario;
  }

}
