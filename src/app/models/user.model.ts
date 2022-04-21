/* export interface User {
    id:number,
    username:string,
    nombre:string,
    apellido:string,
    email?:string,
    password:string
    reoles:Role[]
} */
export interface Sexo{
    id:number;
    sexo:string;
}
export class User {
    id!:number;
    username!:string;
    
    nombre!:string;
    apellido!:string;
    email!:string;
    password!:string
   /*  roles!:Role[] */
    roles!:string[];
}

export interface Role{
    id:number,
    nombre:string,
}
export interface DiaSemana{
    id:number; 
    dia:string;
}

export interface Musculo{
    id:number;
    musculo:string; 
}
export interface Ejercicio{
    id:number;
    nombre:string;
    musculo:Musculo; 
}
export interface Serie{
    id:number;
    ejercicio:Ejercicio;
    series:number;
    repeticiones:number;
}

export interface Rutina{
    id:number; 
    dia:DiaSemana;
    series:Serie[]; 
}
export interface CatalogoSubscripcion{
    id:number;
    tipoSubscripcion:string;
    dias?:number;
    precio:number;
}
export interface Subscripcion{
    id?:number; 
    active:boolean;
    fechaSubscripcion?:Date;
    fechaFin?:Date;
    tipo:CatalogoSubscripcion; 
}
export interface Perfil{
    id?:number; 
    usuario?:User;
    sexo?:Sexo;
    foto?:string; 
    edad?:number; 
    instructor?:string;
    peso?:number; 
    altura?:number; 
    rutinas?:Rutina[];
    subscripcion?:Subscripcion;
}