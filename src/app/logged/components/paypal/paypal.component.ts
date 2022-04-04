import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Precio } from 'src/app/models';
import { BuyService } from '../../services/buy.service';
import { Perfil } from '../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare let paypal:any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit, OnChanges {

  
  @ViewChild('paypalRef',{static:true}) private paypalRef!:ElementRef;
  @Input() precio!:Precio;
  @Input() perfil!:Perfil;
  constructor(private buyService:BuyService,
    private toastr:ToastrService, private router:Router) { }


  ngOnInit(): void {
    /* this.precio = this.buyService.precioSeleccionado;  */
    
    this.paypalRef.nativeElement.innerHTML=""; 
    paypal.Buttons({
      style: {
        layout:  'vertical',
        color:   'black',
        shape:   'rect',
        label:   'paypal' 
      },
      createOrder: (data:any, actions:any)=>{
        return actions.order.create({
          purchase_units:[
            {
              description:"Plan",
              amount:{
                currency_code:"MXN",
                value:this.precio.precio || 200
              }
            }
          ]
          
        })
      },
      onApprove: async (details:any,action:any)=>{
        await this.procesarPago(); 
      },
    }).render('#paypalRef');
  }

  ngOnChanges(changes: SimpleChanges): void {
/*     this.precio = this.buyService.precioSeleccionado;  */
this.paypalRef.nativeElement.innerHTML=""; 
    paypal.Buttons({
      style: {
        layout:  'vertical',
        color:   'black',
        shape:   'rect',
        label:   'paypal' 
      },
      createOrder: (data:any, actions:any)=>{
        return actions.order.create({
          purchase_units:[
            {
              description:"Plan",
              amount:{
                currency_code:"MXN",
                value:this.precio.precio || 200
              }
            }
          ]
          
        })
      },
      onApprove: async (details:any,action:any)=>{
        await this.procesarPago(); 
      },
    }).render('#paypalRef');
  }

  async procesarPago(){
    const estado = await this.buyService.pay().toPromise();
    if(estado){
      this.toastr.success("Se ha procesado el pago"); 
      
    }else{
      this.toastr.error("No se ha procesado el pago"); 
    }

  }
}
