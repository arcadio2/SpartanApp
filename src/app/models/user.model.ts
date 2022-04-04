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
export interface CatalogoSubscripcion{
    id:number;
    tipoSubscripcion:string;
    precio:number;
}
export interface Subscripcion{
    id?:number; 
    active:number;
    tipo:CatalogoSubscripcion; 
}
export interface Perfil{
    id?:number; 
    usuario?:User;
    sexo?:Sexo;
    foto?:string; 
    edad?:number; 
    peso?:number; 
    altura?:number; 
    subscripcion?:Subscripcion;
}