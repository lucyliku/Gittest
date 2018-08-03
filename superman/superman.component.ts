import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-superman',
  template: `
    <h1>
      superman works!
    </h1>
    <button (click)="navfun('/batman')">Batman</button>
    <button (click)="navfun('/ironman')">Ironman</button>
    
    <button (click)="navfun('/')">Home</button>
  `,
  styles: []
})
export class SupermanComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit() {
  }
  navfun(path){
    this.rtr.navigate([path]);
  }

}
