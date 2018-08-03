import { Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import {BatmanComponent} from "./batman/batman.component"

import { SupermanComponent } from "./superman/superman.component";
import { IronmanComponent } from "./ironman/ironman.component";

export let myAppRoutes: Routes = [
    {path:'', component: WelcomeComponent},
    {path:'batman', component: BatmanComponent},
    {path:'superman', component: SupermanComponent},
    {path:'ironman', component: IronmanComponent},
    {path:'batman', component: BatmanComponent},
    {path:'**', component: WelcomeComponent},
]