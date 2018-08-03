import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService{
    constructor(private http:HttpClient){

    }
    getHeroData(){
        return this.http.get("http://localhost:2525/data")
    }
}