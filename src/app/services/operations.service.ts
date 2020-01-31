import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  c:Client;
  lista:Client[];
  a:any={};
  constructor(private http: HttpClient) { this.c=new Client();
  }
  

ruta="http://localhost:3000/api/rest/sglam";
ruta2="http://localhost:3000/api/rest/sglam/entradas";
ruta3="http://localhost:3000/api/rest/sglam/salidas";

  crearCliente(c:Client){
    return this.http.post(this.ruta,c);
  }
  crearEntrada(c:Client){
    return this.http.put(this.ruta2 + `/${c._id}`,c);
  }
  buscarId(id:string){
    return this.http.get(this.ruta + `/${id}`);
  }
  
  crearSalida(c:Client){
    return this.http.put(this.ruta3 + `/${c._id}`,c);
  }

  buscar(){
    return this.http.get(this.ruta);
  }

  salidaId(id:string){
    return this.http.get(this.ruta3 + `/${id}`);
  }

  entradaId(id:string){
    return this.http.get(this.ruta2 + `/${id}`);
  }


}
