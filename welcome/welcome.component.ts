import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      welcome works!
    </p>

    <a [routerLink]="['']">Home</a><br>
    <a [routerLink]="['/superman']">Superman</a><br>
    <a [routerLink]="['/ironman']">Ironman</a><br>
    <a [routerLink]="['/joker']">Joker</a><br>
    <a [routerLink]="['/batman']">Batman</a>

  `,
  styles: []
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
