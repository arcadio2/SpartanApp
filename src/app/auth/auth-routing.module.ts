import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexauthComponent } from './pages/indexauth/indexauth.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',component:IndexauthComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'logout',component:LogoutComponent},
      {path:'**',redirectTo:'login'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
