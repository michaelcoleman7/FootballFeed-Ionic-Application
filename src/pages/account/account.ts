import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
    name: string;
    team: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {

    this.storage.get('name').then((n) => {
      if(n != null){
        let storedName = n;
        this.name = storedName;
      }
      else{
         this.name = "Enter Name";
      }
    });

      this.storage.get('team').then((t) => {
      if(t != null){
        let storedTeam = t;
        this.team = storedTeam;
      }
      else{
         this.team = "Manchester United";
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  saveUserDetails(){
    let name = this.name;
    let team = this.team;

    //console.log(name);
    //console.log(team);

    this.storage.set('name' , name);
    this.storage.set('team' , team);

  }

}
