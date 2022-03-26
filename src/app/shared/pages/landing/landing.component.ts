import { Component, OnInit } from '@angular/core';
import { PreciosService } from '../../../core/precios.service';
import { Precio } from '../../../models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private preciosService:PreciosService) { }
  precios!:Precio[];

  ngOnInit(): void {
    this.obtenerPrecios(); 
  }

  obtenerPrecios(){
    this.preciosService.getAllPrices().subscribe((resp) => {
      this.precios = resp; 
      console.log(this.precios)
    }); 
  }

}
