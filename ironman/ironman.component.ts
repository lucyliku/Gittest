import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-ironman',
  template: `
    <p>
      ironman works!
    </p>
    <button (click)="navfun('/batman')">Batman</button>
    <button (click)="navfun('/superman')">Superman</button>
    
    <button (click)="navfun('/')">Home</button>
  `,
  styles: []
})
export class IronmanComponent implements OnInit {

  constructor(private rtr:Router) { }

  ngOnInit() {
  }
  navfun(path){
    this.rtr.navigate([path]);
  }

}
