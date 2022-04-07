import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { LoggedGuard } from './auth/guards/logged.guard';
import { AuthGuard } from './logged/guards/auth.guard';
import { AdminGuard } from './admin/guards/admin.guard';
import { NoAdminGuard } from './admin/guards/no-admin.guard';

const routes: Routes = [
  {
    path:'',component:LandingComponent,
    canActivate:[LoggedGuard]
  },
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate:[LoggedGuard]
  },
  {
    path:'user',
    loadChildren: ()=>import('./logged/logged.module').then(m=>m.LoggedModule),
    canActivate:[AuthGuard,NoAdminGuard]
  },
  {
    path:'admin',
    loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuard,AdminGuard]
  },
  
  {
    path:'**',redirectTo:'auth'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
