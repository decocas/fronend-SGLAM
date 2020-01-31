import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private r:Router) { }

  ngOnInit() {
  }

  receipt(){
    this.r.navigate(['/receipt']);
  }

  outlet(){
    this.r.navigate(['/outlet']);
  }

  search(){
    this.r.navigate(['/search']);
  }

  report(){
    this.r.navigate(['/report'])
  }

}
