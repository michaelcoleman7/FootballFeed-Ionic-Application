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

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamsProvider: TeamsProvider) {
    this.league_id = navParams.get('leagueValue');
   // console.log("Navparam: "+this.league_id);
  } 

    ionViewWillEnter(){
      console.log("ionViewDidLoad AboutPage");
      this.teamsProvider.getTeams(this.league_id).subscribe(data => {
      this.teamData = data.standing;
      console.log(this.teamData);
    }); 
  }

    update(){
    this.navCtrl.push(FixturesPage, {
       leagueValue: this.league_id
    });
  }

}
