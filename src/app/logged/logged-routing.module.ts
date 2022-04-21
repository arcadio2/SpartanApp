import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './pages/logged/logged.component';
import { HomeComponent } from './pages/home/home.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { EjerciciosUserComponent } from './pages/ejercicios-user/ejercicios-user.component';
import { EjerciciosComponent } from '../shared/components/ejercicios/ejercicios.component';
import { EditComponent } from './pages/edit/edit.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { InstructorGuard } from './guards/instructor.guard';
import { UsuarioGuard } from './guards/usuario.guard';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RutinaComponent } from './pages/rutina/rutina.component';


const routes: Routes = [
  {
    path: '',component:LoggedComponent,
    children:[
      {path:'home',component:HomeComponent,canActivate:[UsuarioGuard]},
      {path:'logout',component:LogoutComponent},
      {path:'profile',component:PerfilComponent},
      {path:'ejercicios',component:EjerciciosComponent},
      {path:'edit',component:EditComponent},
      {path:'rutina',component:RutinaComponent},
      {path:'instructor/alumnos',component:AlumnosComponent,canActivate:[InstructorGuard]},
      {path:'instructor',component:InstructorComponent,canActivate:[InstructorGuard]},
      {path:'instructor/users',component:UsuariosComponent,canActivate:[InstructorGuard]},
      {path:'**',redirectTo:'home'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoggedRoutingModule { }
