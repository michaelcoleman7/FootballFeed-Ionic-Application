import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class NewsProvider {
  constructor(public http: Http) {
    console.log('Hello NewsProvider Provider');
  }

  // get api using http and mapping to json, returned as an observable
  getNews(): Observable<any>{
    return this.http.get("https://newsapi.org/v2/top-headlines?sources=four-four-two&apiKey=b8f9d59c51f94bc9bbe0a32518b26a5d")
    .map(res=>res.json());
  }

}
