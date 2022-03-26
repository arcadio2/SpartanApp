import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/pages/landing/landing.component';
import { LoggedGuard } from './auth/guards/logged.guard';
import { AuthGuard } from './logged/guards/auth.guard';

const routes: Routes = [
  {
    path:'',component:LandingComponent
  },
  {
    path:'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule),
    canActivate:[LoggedGuard]
  },
  {
    path:'user',
    loadChildren: ()=>import('./logged/logged.module').then(m=>m.LoggedModule),
    canActivate:[AuthGuard]
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
