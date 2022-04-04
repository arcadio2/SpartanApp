import { Injectable } from '@angular/core';
import { Precio } from '../../models';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Subscripcion } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BuyService {

  private _precioSeleccionado!:Precio;

  get precioSeleccionado(){
    return this._precioSeleccionado; 
  }
  set setPrecio(precio:Precio){
    this._precioSeleccionado = precio; 
  }
  
  constructor(private router:Router,private userService:UserService) { }

  pay(){
    const perfil = this.userService.perfil;
    const sub:Subscripcion = {
      active:true,
      tipo:this.precioSeleccionado
    } 
    perfil.subscripcion = sub; 
    return this.userService.edit(perfil);
  }

}
