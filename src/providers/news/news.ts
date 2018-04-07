import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  constructor(public http: Http) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(): Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=b8f9d59c51f94bc9bbe0a32518b26a5d")
    .map(res=>res.json());
  }

}
