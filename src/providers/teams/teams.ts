import { Http } from '@angular/http';
import { Injectable,OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Headers,RequestOptions } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class TeamsProvider {
  apiKey: string;
  league_id: number;
  test: number;
  options: any;
  //mode='Observable';
  constructor(public http: Http, private storage:Storage) {

        this.apiKey = '339775594ebf48f3b2828fab0c9a04eb';

        let headers = new Headers({ 'X-Response-Control': 'full' });
        headers.append("X-Auth-Token", this.apiKey);
        this.options = new RequestOptions({ headers: headers });
  }

    getTeams(leagueid: number): Observable<any>{
    return this.http.get("http://api.football-data.org/v1/competitions/"+leagueid+"/leagueTable", this.options)
    .map(res=>res.json());
  }
}
