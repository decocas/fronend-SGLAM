import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from '../models/client';
@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  c:Client;
  constructor(private http: HttpClient) { this.c=new Client();
  }
  

  ruta="http://localhost:3000/api/rest/sglam";

  crearCliente(c:Client){
    return this.http.post(this.ruta,c);
  }

}
