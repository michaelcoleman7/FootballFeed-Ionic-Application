import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';

@IonicPage()
@Component({
  selector: 'page-fixtures',
  templateUrl: 'fixtures.html',
})
export class FixturesPage {
  teamData: any[] = [];
  fixtures: any[] = [];
  league_id: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private teamsProvider: TeamsProvider) {
    //Search navparams to get league_id from value pushed through from about page (leaguetable)
    this.league_id = navParams.get('leagueValue');
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FixturesPage");
    //Subscribe to data from teamProvider 
      this.teamsProvider.getFixtures(this.league_id).subscribe(data => {
      this.fixtures = data.fixtures;
      console.log(this.fixtures);
    }); 
  }

}
