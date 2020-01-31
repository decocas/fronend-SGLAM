import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public logo: AngularFireAuth,
              private r: Router) { }
   
  flag:boolean=false;

  logout(){
    this.logo.auth.signOut;
    this.r.navigate(['/']);
  }
}
