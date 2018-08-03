import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

<ul class="nav navbar-nav">
    <li *ngFor='let hero of herodata'>
    <a href="/{{ hero.title|lowercase }}">{{ hero.title }}</a>
    </li>
  </ul>
  `,
  styles: []
})
export class HeaderComponent  {
@Input() hd=[];


}
