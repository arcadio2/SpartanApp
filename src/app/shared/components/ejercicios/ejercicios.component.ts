import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from 'src/app/core/ejercicios.service';
import { Ejercicio, Musculo } from '../../../models/user.model';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {

  ejercicios:Ejercicio[]=[]; 
  texto:string=""; 
  musculos:Musculo[] = []; 
  selectedMusculos:number[] =[]; 
  ejerciciosMostrados:Ejercicio[]=[]; 
  constructor(private ejercicioService:EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerMusculos();
    this.obtenerEjercicios();

  }

  obtenerMusculos(){
    this.ejercicioService.getAllMusculos().subscribe(resp=>{
      this.musculos = resp; 
    })
  }


  cambio(){
    this.ejercicioService.getEjerciciosByNombreAndMusculo(this.texto,this.selectedMusculos).subscribe(resp=>{
      this.ejercicios = resp; 
      this.ejerciciosMostrados = this.ejercicios.slice(0,10); 
    })
  }

  obtenerEjercicios(){
    this.ejercicioService.getAllEjercicios().subscribe(resp=>{
      this.ejercicios = resp;  
      this.ejerciciosMostrados = this.ejercicios.slice(0,10); 
      
    })
  }



  onPageChange(event:any){

    const inicioPage = event.first; 
    const finPage = inicioPage+10; 
    
    this.ejerciciosMostrados = this.ejercicios.slice(inicioPage,finPage);
    
  }


  buscar(){
    /* this.selectedMusculos = []; */
    
      this.ejercicioService.getEjerciciosByNombreAndMusculo(this.texto,this.selectedMusculos).subscribe(resp=>{
        this.ejercicios = resp; 
        this.ejerciciosMostrados = this.ejercicios.slice(0,10); 
      })
    
    
  }

}
