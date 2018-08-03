import { Component, Input, Output, EventEmitter } from "@angular/core"



@Component({

selector : 'app-inner-comp',

template: `

<div class="box">

<h1>Inner Component: {{ anything }}</h1>
<input #ip1 type="text">
<button (click)="evtHandler(ip1.value)">Send</button>

<hr>
<ng-content select="h1"></ng-content>


</div>

`,

styles:[`

.box{

width: 580px;

height: 250px;

border: 2px solid grey;

background-color: #ECECEC;

margin: auto

}



`]

})

export class InnerComponent{

@Input() anything;
@Output() compEvt: EventEmitter<any>=new EventEmitter();
evtHandler(evt){
    //alert("do you want to create an event")
    this.compEvt.emit(evt);
}
}