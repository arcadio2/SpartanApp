import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, Perfil, Sexo } from '../../../models/user.model';

@Component({
  selector: 'app-create-prfile',
  templateUrl: './create-prfile.component.html',
  styleUrls: ['./create-prfile.component.css']
})


export class CreatePrfileComponent implements OnInit {
  usuario:User = new User();
  @Output() cambio = new EventEmitter<Perfil>();
  perfil!:Perfil;
  sexos:Sexo[]=[];
  sexo!:Sexo;
  errores:any={};
  profileForm!: FormGroup;
  constructor(private fromBuilder:FormBuilder,
    private messageService:MessageService,
    private router:Router,
    private toast:ToastrService,
    private authService:AuthService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario; 
    console.log(this.usuario)
    this.sexos = [
      {id:1,sexo:'Hombre'},
      {id:2,sexo:'Mujer'},

    ]
    this.profileForm = this.fromBuilder.group({
      edad:['',[Validators.required]],
      peso:[''],
      altura:[''],
      sexo:[''],
    })
  }

  createProfile(){
    this.profileForm.markAllAsTouched();
    if(this.profileForm.valid){

      
      this.sexo = {
        id:this.profileForm.get('sexo')?.value,
        sexo: this.profileForm.get('sexo')?.value==1?'Hombre':'Mujer'
      }
      this.perfil = {
        edad:this.profileForm.get('edad')?.value,
        peso:this.profileForm.get('peso')?.value,
        altura:this.profileForm.get('altura')?.value,
        sexo:this.sexo,
        usuario:this.usuario
      }
     
      this.userService.saveProfile(this.perfil).subscribe((resp:any)=>{
        this.perfil = resp.perfil as Perfil;
        this.userService.setPerfil = this.perfil;
        this.cambio.emit(this.perfil); 
      })
      /* this.perfil.edad = this.profileForm.get('edad')?.value; 
      this.perfil.peso = this.profileForm.get('peso')?.value; 
      this.perfil.altura = this.profileForm.get('altura')?.value;  */
      
    
    
      
    }
  }

}
