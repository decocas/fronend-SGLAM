import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from 'firebase';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public log:AngularFireAuth,
              private r:Router,
              private l:LoginService
              ) { }

  ngOnInit() {
  }

  login(formulario:NgForm){
            this.log.auth.signInWithEmailAndPassword(formulario.value.mail, formulario.value.pass)
            .then(res=>{
              console.log(res);
              this.l.flag=true;
              this.r.navigate(['/manager']);
            }).catch(err=>console.log('err',err.message));
              formulario.reset();
        }

}
