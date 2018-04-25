import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
    name: string;
    team: string;
    profilePicture: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage,private camera: Camera) {

    //search local storage for user name and set default if not found
    this.storage.get('name').then((n) => {
      //if found
      if(n != null){
        let storedName = n;
        this.name = storedName;
      }
      //set to default(not found)
      else{
         this.name = "Enter Name";
      }
    });
      //if found
      this.storage.get('team').then((t) => {
      if(t != null){
        let storedTeam = t;
        this.team = storedTeam;
      }
      //set to default(Not Found)
      else{
         this.team = "Enter Team";
      }
    });
  }

  //takes profile picutre using phones camera and displays in application
  takePicture(){
     //camera code - adapted from ionic docs
      const options: CameraOptions = {
      quality: 75,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true, // dsiplays in orientation taken
      saveToPhotoAlbum: true // saves photo to users gallery
  }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.profilePicture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
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

    this.navCtrl.push(HomePage);

  }

}
