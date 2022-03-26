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