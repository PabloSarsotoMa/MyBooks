export class Usuario {
    constructor(
        public nombre:string,
        public apellidos:string,
        public correo:string,
        public foto:string,
        public password:string,
        public id_usuario:number = 0){}
}
