import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Precio } from '../models';
import { URL_BACKEND } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  private url_base:string = URL_BACKEND+'api/precios/';

  constructor(private http:HttpClient, private router:Router) { }

  getAllPrices():Observable<Precio[]>{
    return this.http.get<Precio[]>(this.url_base+'all');
  }

}
