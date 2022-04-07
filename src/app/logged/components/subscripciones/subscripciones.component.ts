import { Component, OnInit } from '@angular/core';
import { PreciosService } from '../../../core/precios.service';
import { Precio } from '../../../models';
import { BuyService } from '../../services/buy.service';

@Component({
  selector: 'app-subscripciones',
  templateUrl: './subscripciones.component.html',
  styleUrls: ['./subscripciones.component.css']
})
export class SubscripcionesComponent implements OnInit {



  constructor(private preciosService:PreciosService,
    private buyService:BuyService) { }
    
  precios!:Precio[];
  precioSeleccionado!: Precio;
  selected!:number;
  buttonLoading:boolean = false; 
  ngOnInit(): void {
    this.obtenerPrecios(); 
  }
  obtenerPrecios(){
    this.preciosService.getAllPrices().subscribe((resp) => {
      this.precios = resp; 
  
    }); 
  }

  selectPrice(i:number,precio:Precio){
    this.selected = i; 
    this.buyService.setPrecio = precio; 
    this.precioSeleccionado = precio; 
  }
  buy(){
    this.buttonLoading = true; 
  }

}
