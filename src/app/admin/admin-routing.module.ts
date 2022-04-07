import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LogoutComponent } from '../logged/pages/logout/logout.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'usuarios',component:UsuariosComponent},
      {path:'logout',component:LogoutComponent},
      {path:'create',component:CreateUserComponent},
      {path:'**',redirectTo:'usuarios'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
