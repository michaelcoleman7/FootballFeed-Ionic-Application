import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import storage
import { Storage } from '@ionic/storage';
//import about page for navcontroller navigation
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
    LeagueChosen: any;
    clicked: number;
    buttonDisabled = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
   //ensure button disabled on page load
   this.RevealBtn(0);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }
  //navigation to about page(league tables) sending with the league id chosen from radio selection
  update(){
    this.navCtrl.push(AboutPage, {
      leagueValue: this.LeagueChosen
    });
  }

  //method to reveal button when an option is picked or disable if no option selected using interpolation
  RevealBtn(input: number){
    this.clicked = input;
    if(this.clicked == 0){
      this.buttonDisabled = true;
    }
    else{
      this.buttonDisabled = false;
    }
  }
}
