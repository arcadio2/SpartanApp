import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_BACKEND } from '../config/config';
import { Observable } from 'rxjs';
import { Ejercicio } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  private url_base:string = URL_BACKEND+'api/ejercicios';
  constructor(private http:HttpClient, private router:Router) { }


  getAllEjercicios():Observable<Ejercicio[]>{
    return this.http.get<Ejercicio[]>(this.url_base); 
  }

  getEjerciciosByNombre(nombre:string):Observable<Ejercicio[]>{
    return this.http.get<Ejercicio[]>(this.url_base+'/'+nombre); 
  }

  
}
