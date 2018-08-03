import { Component } from "@angular/core";

@Component({
    selector : 'app-second-comp',
    template : `
    <h1 style="background-color:red">{{ message }}</h1>
    <h1 [style.background-color]="messageColor">{{ message }}</h1>
    <h1 [style.width]="messageWidth" style="background-color:blue">{{ message }}</h1>
    <h1 [style.font-size.px]="messageFontWeight * 4" >{{ message }}</h1>
    <hr>
    <h1 [ngStyle]="{width:messageWidth, color:messageColor}">{{ message }}</h1>
    
    <hr>
    <input type= "checkbox" [(ngModel)]="useragree">
    <div class="box" *ngIf="useragree">
    <h1>Login Screen</h1>
    <fieldset>
    <legend>Join Us</legend>
    <form action="">
    <label for="">Login Id</label>
    <input type="text">
    <br>
    <label for="">Password</label>
    <input type="Password">
    <br>
    <button>JoinUs</button>
    </form>
    </fieldset>
    </div>
    `
})




export class SecondComponent{
message ='Hello from Second Component'
messageColor = "Orange";
messageWidth = 400;
messageFontWeight = 20;
color1 = "green";
useragree = true;
}