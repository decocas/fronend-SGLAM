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
              console.log(res);
            });

          }
}
