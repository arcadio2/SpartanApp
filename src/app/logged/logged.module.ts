import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './pages/logged/logged.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LogoutComponent } from './pages/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CreatePrfileComponent } from './components/create-prfile/create-prfile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoggedComponent,
    HomeComponent,
    NavbarComponent,
    LogoutComponent,
    PerfilComponent,

    CreatePrfileComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,    
    ReactiveFormsModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
