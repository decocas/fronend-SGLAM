import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expreson';

  constructor( private r:Router,
              private l:LoginService){

  }

  manager(){
    this.r.navigate(['/manager']);

  }

  login(){
    this.r.navigate(['/login']);
  }

  cerrar(){
    if(this.l.flag){
      this.l.logout();
    }else{
      this.r.navigate(['/login']);
    }
  }
}
