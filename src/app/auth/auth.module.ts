import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexauthComponent } from './pages/indexauth/indexauth.component';
import { PrimengModule } from '../primeng/primeng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    IndexauthComponent,
    LogoutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ToastrModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
