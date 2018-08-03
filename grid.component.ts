import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
  <table class='table table-striped table-responsive'>
  <thead>
    <tr>
      <td>Sl#</td>
      <td>Title</td>
      <td>Full Name</td>
      <td>Photo</td>
      <td>City</td>
      <td>Ticket Price</td>
      <td>Release Date</td>
      <td>Movies Count</td>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let hero of hd">
      <td>{{ hero.sl }}</td>
      <td>{{ hero.title }}</td>
      <td>{{ hero.firstname+' '+hero.lastname }}</td>
      <td><img  class="img-circle" src="{{ hero.poster}}" alt="{{hero.title | lowercase}}" width="50">
      </td>
     
      <td>{{ hero.city }}</td>
      <td>{{ hero.ticketprice }}</td>
      <td>{{ hero.releasedate }}</td>
      <td>{{ hero.movieslist.length }}</td>
    </tr>
  </tbody>
</table>


  `,
  styles: []
})
export class GridComponent {

  @Input() hd=[]

}
