import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BatmanComponent } from './batman/batman.component';
import { SupermanComponent } from './superman/superman.component';
import { IronmanComponent } from './ironman/ironman.component';
import { myAppRoutes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    BatmanComponent,
    SupermanComponent,
    IronmanComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(myAppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
