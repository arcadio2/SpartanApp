import { Component, OnInit } from '@angular/core';
import { PreciosService } from '../../../core/precios.service';
import { Precio } from '../../../models';

@Component({
  selector: 'app-subscripciones',
  templateUrl: './subscripciones.component.html',
  styleUrls: ['./subscripciones.component.css']
})
export class SubscripcionesComponent implements OnInit {



  constructor(private preciosService:PreciosService) { }
  precios!:Precio[];
  selected!:number;
  buttonLoading:boolean = false; 
  ngOnInit(): void {
    this.obtenerPrecios(); 
  }
  obtenerPrecios(){
    this.preciosService.getAllPrices().subscribe((resp) => {
      this.precios = resp; 
      console.log(this.precios)
    }); 
  }

  selectPrice(i:number){
    this.selected = i; 
  }
  buy(){
    this.buttonLoading = true; 
  }

}
