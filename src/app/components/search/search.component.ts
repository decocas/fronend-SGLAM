import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { Client } from 'src/app/models/client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private o:OperationsService) { }

  c:Client;
  
  ngOnInit() {
  this.listar();
  }

  listar(){
    this.o.buscar().subscribe(res=>{
      this.o.lista=res as Client[];
      console.log(res);
    });
  }

  listarId(formulario:NgForm){
      console.log(formulario.value._id);
      this.o.buscarId(formulario.value._id)
      .subscribe(res=>{
       
        this.c= res as Client;
        formulario.reset();
      });
  }

}
