import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User, Perfil } from '../../../models/user.model';
import { UserService } from '../../services/user.service';
import { BuyService } from '../../services/buy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!:User; 
  perfil!:Perfil;
  constructor(private auth:AuthService,
    private userService:UserService,
    private buyService:BuyService) { }


  ngOnInit(): void {
   
    this.loadingUser(); 
    this.loadingProfile(); 
    
  }

  loadingUser(){
    this.user = this.auth.usuario;
  }
  loadingProfile(){

    this.userService.getProfileByUsername(this.user.username).subscribe((resp:any)=>{
      this.userService.guardarPerfil(resp.perfil);
      this.perfil = this.userService.perfil; 
    })
  }

  asignPerfil(e:Perfil){
    this.perfil = e; 
    
  }


  /**FECHA QUE CALCULA LOS DÍAS RESTANTES */
  get diasRestantes(){
    const inicio_s:string = this.perfil.subscripcion?.fechaSubscripcion?.toString() || '';
    const fin_s:string = this.perfil.subscripcion?.fechaFin?.toString() ||''; 
    
    const inicio = new Date(inicio_s); 
    const fin = new Date(fin_s);
    const difference= Math.abs( (fin!.getTime() ) - (inicio!.getTime()) );
    let days:number = difference/(1000 * 3600 * 24)
    if(!days){
      days = this.buyService.precioSeleccionado.dias || 0;
    }

    return days; 
  }

}
