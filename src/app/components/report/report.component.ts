import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { Client } from 'src/app/models/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  c:Client;
  constructor(private o: OperationsService) { }

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.o.buscar().subscribe(res=>{
      this.o.lista=res as Client[];
      console.log(res);
    });
  }
  a:any=[];
  listarId(formulario:NgForm){
    console.log(formulario.value._id);
    this.o.buscarId(formulario.value._id)
    .subscribe(res=>{
      
      this.c= res as Client;
      formulario.reset();
    });
      }

      salida_id(formulario:NgForm){
        console.log(formulario);
          this.o.salidaId(formulario.value._id)
          .subscribe(res=>{
            this.a = res as any[];
            console.log(res);
            formulario.reset();
          })
              }



}
