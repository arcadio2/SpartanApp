/* export interface User {
    id:number,
    username:string,
    nombre:string,
    apellido:string,
    email?:string,
    password:string
    reoles:Role[]
} */

export class User {
    id!:number;
    username!:string
    nombre!:string
    apellido!:string
    email!:string
    password!:string
    roles!:Role[]
}

export interface Role{
    id:number,
    nombre:string,
}
export interface DiaSemana{
    id:number; 
    dia:string;
}
export interface Ejercicio{
    id:number;
    nombre:string;
    musculo:string; 
}
export interface Rutina{
    id:number; 
    dia:DiaSemana;
    ejercicios:Ejercicio[]; 
}
export interface Perfil{
    id:number; 
    usuario:User;
    sexo:string;
    foto:string; 
    edad:number; 
    peso:number; 
    altura:number; 
}