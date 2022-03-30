import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';
import {MessageService, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario:User = new User();
  loginForm!: FormGroup;
    
    submitted = false;

    constructor(private formBuilder:FormBuilder, 
            private authService:AuthService,
            private router:Router,
            private toast:ToastrService,
            private messageService:MessageService,
            private primengConfig: PrimeNGConfig){}

    ngOnInit() {
      this.primengConfig.ripple = true;
        this.loginForm = this.formBuilder.group({
          nombre:['',[Validators.required]],
          password:['',[Validators.required]]
        })
      /*      this.loginForm = new FormGroup({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        }); */
 
    }
    showSuccess() {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Iniciado sesión con éxito'});
    }
    onSubmit() { 
        this.submitted = true;
        /* alert(JSON.stringify(this.loginForm.value)); */
        this.usuario.username = this.loginForm.get('nombre')?.value;
        this.usuario.password = this.loginForm.get('password')?.value;

        this.authService.login(this.usuario).subscribe(res =>{
          console.log("RESP")
          
          this.authService.guardarUsuario(res.access_token);
          this.authService.guardarToken(res.access_token);
          this.usuario = this.authService.usuario;
          this.router.navigateByUrl('/user');
          this.toast.success("Haz iniciado sesión con éxito")
        },err=>{
          if(err.status==400){
    
            this.showError();
          }
        })
    }

    

    showError() {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Credenciales inválidas'});
    }

}
