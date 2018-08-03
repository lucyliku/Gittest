import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <p>
      batman works!
    </p>
    
    <button (click)="navfun('/superman')">Superman</button>
    <button (click)="navfun('/ironman')">Ironman</button>
    
    <button (click)="navfun('/')">Home</button>
  `,
  styles: []
})
export class BatmanComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit() {
  }
  navfun(path){
    this.rtr.navigate([path]);
  }

}
