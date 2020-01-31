import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/services/operations.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {

  constructor(private o: OperationsService) { }

  ngOnInit() {
  }


  registrarSalida(formulario:NgForm){
    
      if(formulario.value._id){
        this.o.crearSalida(formulario.value)
        .subscribe(res=>{
          console.log(res);
          console.log(formulario.value);
        });

        formulario.reset();
      }
  }


}
