import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Precio } from 'src/app/models';
import { BuyService } from '../../services/buy.service';
import { Perfil } from '../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
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
  constructor(private buyService:BuyService, private userService:UserService,
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
        this.userService.setPerfil = this.perfil;
      },
    }).render('#paypalRef');
  }

  async procesarPago(){
    const estado:any = await this.buyService.pay().toPromise();
    if(estado){
      this.perfil = estado.perfil as Perfil;
      this.userService.setPerfil = this.perfil;
      
      this.toastr.success("Se ha procesado el pago"); 
      
    }else{
      this.toastr.error("No se ha procesado el pago"); 
    }

  }
}
