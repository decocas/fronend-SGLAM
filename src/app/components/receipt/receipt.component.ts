import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { OperationsService } from 'src/app/services/operations.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  c:Client;
  constructor(private o:OperationsService) { }

  ngOnInit() {
  }
          registrarCliente(formulario:NgForm){
            
            this.o.crearCliente(formulario.value)
            .subscribe(res=>{
              console.log(formulario.value);
              console.log(res);
            });
            console.log(formulario.value);
            formulario.reset();
              this.o.c=new Client();
         
            }

          registrarEntrada(formulario?:NgForm){
            
          if(formulario.value._id){
              this.o.crearEntrada(formulario.value)
              .subscribe(res=>{
               
                console.log(res);
                console.log(formulario.value);
              });
              formulario.reset();
          }
          }

          getCliente(formulario:NgForm){
            console.log(formulario.value._id);
            this.o.buscarId(formulario.value._id)
            .subscribe(res=>{
              this.c= res as Client;
              formulario.reset();
            })
          }




}
