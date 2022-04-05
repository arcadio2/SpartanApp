import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './pages/logged/logged.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EjerciciosUserComponent } from './pages/ejercicios-user/ejercicios-user.component';
import { EjerciciosComponent } from '../shared/components/ejercicios/ejercicios.component';


const routes: Routes = [
  {
    path: '',component:LoggedComponent,
    children:[
      {path:'home',component:HomeComponent},
      {path:'logout',component:LogoutComponent},
      {path:'profile',component:PerfilComponent},
      {path:'ejercicios',component:EjerciciosComponent},
      {path:'**',redirectTo:'home'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoggedRoutingModule { }
