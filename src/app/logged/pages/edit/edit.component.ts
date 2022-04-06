import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
import { User, Perfil, Sexo } from '../../../models/user.model';
import { URL_BACKEND } from '../../../config/config';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  usuario:User = new User();
  fotoSeleccionada: File | undefined;
  
  url_backend:string =  URL_BACKEND;
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
    this.carcargPerfil();
    this.sexos = [
      {id:1,sexo:'Hombre'},
      {id:2,sexo:'Mujer'},

    ]
    this.profileForm = this.fromBuilder.group({
      edad:['',[Validators.required]],
      peso:[''],
      altura:[''],
      sexo:[''],
      foto:[]
    })
  }

resetForm(){
  this.profileForm.reset({
    edad:this.perfil.edad,
    peso:this.perfil.peso,
    altura:this.perfil.altura
  })
}
carcargPerfil(){
  this.userService.getProfileByUsername(this.usuario.username).subscribe((resp:any)=>{
    this.userService.guardarPerfil(resp.perfil);
    this.perfil = this.userService.perfil; 
    this.resetForm();
  })
}

  seleccionarFoto(event:any) {
    this.fotoSeleccionada = event.target.files[0];

    if (this.fotoSeleccionada!.type.indexOf('image') < 0) {
        this.toast.error('El archivo debe ser del tipo imagen','Error seleccionar imagen: '); 
        this.fotoSeleccionada = undefined; 
    }
  }
  
  subirFoto() {

    if (!this.fotoSeleccionada) {
      
    } else {
      this.userService.subirFoto(this.fotoSeleccionada, this.perfil?.usuario?.username || '')
        .subscribe((resp:any) => {
          if(resp){
            this.toast.success("Se ha subido correctamente la foto");
            this.perfil = resp.perfil;
            this.userService.setPerfil = this.perfil;
            this.fotoSeleccionada = undefined; 
            this.resetForm();
          }
        }); 
    }
  }

  editarPerfil(){
    this.profileForm.markAllAsTouched();
    if(this.profileForm.valid){
      this.editProfile();
    }
  }


  editProfile(){
    this.profileForm.markAllAsTouched();
    if(this.profileForm.valid){
      this.perfil = {
        edad:this.profileForm.get('edad')?.value,
        peso:this.profileForm.get('peso')?.value,
        altura:this.profileForm.get('altura')?.value,
        sexo:this.sexo,
        usuario:this.usuario
      }
      this.userService.edit(this.perfil).subscribe((resp:any)=>{
        
        this.perfil = resp.perfil as Perfil;
        this.userService.setPerfil = this.perfil;

        if(resp){
          this.messageService.add({severity:'success', summary:resp.mensaje})
        }
        
      })
      /* this.perfil.edad = this.profileForm.get('edad')?.value; 
      this.perfil.peso = this.profileForm.get('peso')?.value; 
      this.perfil.altura = this.profileForm.get('altura')?.value;  */

    }else{
      this.toast.error("Completa los datos de manera correcta ","datos incorrectos"); 
    }
  }
  
}
