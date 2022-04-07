import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { User, Role } from '../../../models/user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:User[] = []; 
  selectedRoles:number[] =[];
  roles:Role[]=[]; 
  usuariosMostrados:User[] = []; 
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.roles = [
      {
        id:1,
        nombre:'ROLE_USER'
      },
      {
        id:2,
        nombre:'ROLE_ADMIN'
      },
      {
        id:3,
        nombre:'ROLE_INSTRUCTOR'
      }
    ]
  }

  getAllUsers(){
    this.adminService.getAllUsers().subscribe(resp=>{
      this.usuarios = resp as User[];
      this.usuariosMostrados = this.usuarios.slice(0,10);
    });
  }

  
  onPageChange(event:any){

    const inicioPage = event.first; 
    const finPage = inicioPage+10; 
    
    this.usuariosMostrados = this.usuarios.slice(inicioPage,finPage);
    
  }
  
  isAdmin(usuario:User):boolean{
    return this.isRole('ROLE_ADMIN',usuario); 
  }
  isInstrucor(usuario:User){
    return this.isRole('ROLE_INSTRUCTOR',usuario); 
  }

  isRole(role:string,usuario:User){
    let ban = false; 
    usuario.roles.forEach((rol:any)=>{
      if(rol.nombre == role){
        ban =true;  
      }
    })
    return ban; 
  }

}
