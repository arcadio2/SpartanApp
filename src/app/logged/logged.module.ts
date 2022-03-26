import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './pages/logged/logged.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimengModule } from '../primeng/primeng.module';
import { LogoutComponent } from './pages/logout/logout.component';


@NgModule({
  declarations: [
    LoggedComponent,
    HomeComponent,
    NavbarComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
