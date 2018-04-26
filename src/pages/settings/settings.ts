import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
    LeagueChosen: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
   
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  update(){
    this.navCtrl.push(AboutPage, {
       leagueValue: this.LeagueChosen
    });
  }

  getData(){
      this.storage.get('League_id').then((data) =>{
      console.log(data);
    }); 
  }

}
