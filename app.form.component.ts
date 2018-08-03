import { Component } from "@angular/core";

@Component({
    selector : 'app-form',
    template : `
<form action="#" (submit)="formSubmitHandler(myForm.value, $event)"  #myForm="ngForm"  method="get" name="myform" novalidate>
  <label for="username">User Name : </label>
  <input type="text" #unameInput="ngModel" [(ngModel)]="uname" name="username" required  />
  <br/>
  <label for="useremail">User eMail : </label>
  <input type="email" #uemailInput="ngModel" [(ngModel)]="uemail" name="useremail" required pattern=".+@.+"/>
  <br/>
  <label for="userage">User Age : </label>
  <input type="number" #uageInput="ngModel" [(ngModel)]="uage" name="userage" required />
  <br/>
  <button [disabled]="myForm.invalid" type="submit">Login</button>
</form>
<p *ngIf="unameInput.invalid && unameInput.touched">Do enter a valid user name</p>
<p *ngIf="uemailInput.invalid && uemailInput.touched">Do enter a valid user email</p>
<p *ngIf="uageInput.invalid && uageInput.touched">Do enter a valid age </p>
<hr/>
<h1>User Name : {{ uname }} | User Email : {{ uemail }} | User Age {{ uage }}</h1>
    `,
    styles:[`
    label { width : 100px; display: inline-block; padding: 5px; margin: 5px}
    input.ng-invalid.ng-touched{ border : 2px solid crimson}
    input.ng-valid.ng-touched{ border : 2px solid darkseagreen}
    `]
})
export class FormComponent{

    uname = '';
    uemail = '';
    uage = '';

    formSubmitHandler(args,evt){
      // alert("user is trying to submit the form");
      // myForm.submit();
      // console.log(args.username, args.useremail, args.userage);
      /*
        */
     if (args.userage < 18) {
         alert('you are too young to apply');
        } else if(args.userage > 90){
            alert('you are too old to apply');
        } else {
            myForm.submit();
        }
       // console.log(evt.tagret.value.username)
    }

}