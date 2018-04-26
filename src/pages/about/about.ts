import { Component} from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { TeamsProvider } from '../../providers/teams/teams';
import { FixturesPage } from '../fixtures/fixtures';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  teamData: any[] = [];
  league_id: number;

  //NOTE: page should be called leaguetable but had error renaming

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamsProvider: TeamsProvider) {
    // Search navparams to get league_id from value pushed through from settings selection
    this.league_id = navParams.get('leagueValue');
  } 

    ionViewWillEnter(){
      console.log("ionViewDidLoad AboutPage");
      //Subscribe to data from teamProvider 
      this.teamsProvider.getTeams(this.league_id).subscribe(data => {
      this.teamData = data.standing;
      console.log(this.teamData);
    }); 
  }

    //Method to move to fixtures page using navController and push with it value of this.league_id for api usage
    update(){
    this.navCtrl.push(FixturesPage, {
       leagueValue: this.league_id
    });
  }

}
