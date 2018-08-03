import { Component, Output, EventEmitter } from "@angular/core"

@Component(
{
selector : 'app-outer-comp',
template:`
<div class="box">
<h1>Outer Component</h1>
<hr>
<app-inner-comp (compEvt)="compEventHandler($event)" anything="{{ message }}">
</app-inner-comp>
</div>

`,
styles:[`
.box{
    width : 600px;
    height : 400px;
    border : 2px solid gray;
    background-color : silver;
    margin :auto; 
}
`]
})

export class OuterComponent{
message="Hello from the class";
compEventHandler(vals){
    //alert("inner component Evt happened");
    alert(vals);

}

}