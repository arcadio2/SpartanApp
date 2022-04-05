import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from 'src/app/core/ejercicios.service';
import { Ejercicio } from '../../../models/user.model';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios:Ejercicio[]=[]; 
  texto:string=""; 
  ejerciciosMostrados:Ejercicio[]=[]; 
  constructor(private ejercicioService:EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerEjercicios();

  }

  obtenerEjercicios(){
    this.ejercicioService.getAllEjercicios().subscribe(resp=>{
      this.ejercicios = resp;  
      
      this.ejerciciosMostrados = this.ejercicios.slice().splice(0,10); 
      
    })
  }



  onPageChange(event:any){
    const inicioPage = event.first; 
    const finPage = inicioPage+10; 
    this.ejerciciosMostrados = this.ejercicios.slice().splice(inicioPage,finPage);
  }


  buscar(){
    this.ejercicioService.getEjerciciosByNombre(this.texto).subscribe(resp=>{
      this.ejercicios = resp; 
      this.ejerciciosMostrados = this.ejercicios.slice().splice(0,10); 
    })
  }

}
