import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoggedModule } from '../logged/logged.module';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsuariosComponent,
    NavbarAdminComponent,
    LogoutComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    AdminRoutingModule
  ],
  exports: [
    UsuariosComponent  
  ]
})
export class AdminModule { }
