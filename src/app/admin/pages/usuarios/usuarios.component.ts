import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { User, Role } from '../../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserRole } from '../../models/useradmin.models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:User[] = []; 
  selectedRoles:number[] =[];
  checkedsAdmin:boolean[] =[]; 
  checkedsInstructor:boolean[]=[];
  roles:Role[]=[]; 
  usuariAEliminar!:User; 
  siEliminar:boolean = false; 
  usuariosMostrados:User[] = []; 
  usuariosMostradosFinal:UserRole[]=[];
  constructor(private adminService:AdminService,
              private toast:ToastrService,private messageService:MessageService) { }

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
    this.usuarios = [];
    this.usuariosMostradosFinal =[];
    this.adminService.getAllUsers().subscribe(resp=>{
      this.usuarios = resp as User[];
      this.usuariosMostrados = this.usuarios.slice(0,10);
      

      this.usuariosMostrados.forEach(user=>{
          this.usuariosMostradosFinal.push(
            {
              user:user,
              isAdmin:this.isAdmin(user),
              isInstructor:this.isInstrucor(user)
            }
          )
      })
    });
  }

  
  onPageChange(event:any){

    const inicioPage = event.first; 
    const finPage = inicioPage+10; 
    
    this.usuariosMostrados = this.usuarios.slice(inicioPage,finPage);
    
  }

  cambiaAdmin(e:any,usuario:User){
    
    this.adminService.makeAdmin(usuario).subscribe(resp=>{
      this.toast.clear();
      if(resp){
        
        this.toast.success("Se ha actualizado el Usuario","Correcto");  
        this.getAllUsers();
      }

    })
    /* this.showConfirm();  */
  }

  cambiarInstructor(e:any,usuario:User){
    this.adminService.makeInstructor(usuario).subscribe(resp=>{
      this.toast.clear();
      if(resp){
        
        this.toast.success("Se ha actualizado el Usuario","Correcto");  
        this.getAllUsers();
      }

    })
  }

  noEliminar(){
    this.usuariAEliminar = new User();
    this.messageService.clear();
  }

  eliminar(){
    this.messageService.clear();
    this.adminService.deleteUser(this.usuariAEliminar).subscribe((resp:any)=>{
      if(resp){
        this.toast.success(resp.mensaje,"Correcto"); 
        this.getAllUsers();
      }
    })
  }

  showConfirm(usuario:User) {
    this.usuariAEliminar = usuario; 
    this.messageService.clear();
    this.messageService.add(
      {
        key: 'c', 
        sticky: true, 
        severity:'warn', 
        summary:'Estás seguro de eliminar al usuario', 
        detail:'Confirma para proceder'
      }); 
  }
  nombreRole(role:string):string{
    if(role == 'ROLE_ADMIN'){
      return "Administrador"; 
    }else if(role == 'ROLE_USER'){
      return "Usuario"; 
    }else if(role == 'ROLE_INSTRUCTOR'){
      return "Instructor"; 
    }else{
      return "";
    }
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
