import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuario:User = new User();
  errores:any={};
  loginForm!: FormGroup;
  constructor(private fromBuilder:FormBuilder,
    private messageService:MessageService,
    private router:Router,
    private toast:ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.fromBuilder.group({
      nombre:['',[Validators.required]],
      apellido:[''],
      username:[''],
      email:[''],
      password:['',[Validators.required]],
      rpassword:['']
    })
  }

  register(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      this.usuario.username = this.loginForm.get('username')?.value; 
      this.usuario.nombre = this.loginForm.get('nombre')?.value; 
      this.usuario.apellido = this.loginForm.get('apellido')?.value; 
      this.usuario.email = this.loginForm.get('email')?.value; 
      this.usuario.password = this.loginForm.get('password')?.value; 
      this.authService.registerUser(this.usuario).subscribe(resp=>{
        
        this.authService.login(this.usuario).subscribe(res =>{

          this.authService.guardarUsuario(res.access_token);
          this.authService.guardarToken(res.access_token);
          this.usuario = this.authService.usuario;
          this.router.navigateByUrl('/user');
          this.toast.success("Haz iniciado sesión con éxito")
          
        },err=>{
          if(err.status==400){
    
            this.showError("No se pudo iniciar sesión");
          }
        })
      }, err=>{
        console.log("error",err)
        if(err.status==400){
          this.showError(err.error.mensaje);
          console.log("errorrrr",err.error.errors)
          this.errores.nombre = err.error.errors.nombre; 
          this.errores.username = err.error.errors.username; 
          this.errores.apellido = err.error.errors.apellido; 
          this.errores.email = err.error.errors.email; 
          this.errores.password = err.error.errors.password; 
        }else{
          this.showError(err.error.mensaje+". Intenta con otro");
        }
        
      }); 
    }
  }
  showError(message:string) {
    this.messageService.add({severity:'error', summary: 'Error', detail: message});
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Te has registrado con éxito'});
  }
}
