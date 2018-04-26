import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import storage
import { Storage } from '@ionic/storage';

//import homepage for navcontroller navigation
import { HomePage } from '../home/home';

//import plugins
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Vibration } from '@ionic-native/vibration';

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
    name: string;
    team: string;
    favPlayer: string;
    nationality: string;
    dob: string;
    profilePicture: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage,
    private camera: Camera,private vibration: Vibration) {

    //if no profile picture has been taken, then set to default image below
    if(this.profilePicture == null){
      this.profilePicture = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png";
    }

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

    //search local storage for user team and set default if not found
    this.storage.get('team').then((t) => {
      //if found
      if(t != null){
        let storedTeam = t;
        this.team = storedTeam;
      }
      //set to default(Not Found)
      else{
         this.team = "Enter Team";
      }
    });
    
    //search local storage for favorite player and set default if not found 
    this.storage.get('favPlayer').then((p) => {
      //if found
      if(p != null){
        let storedPlayer = p;
        this.favPlayer = storedPlayer;
      }
      //set to default(Not Found)
      else{
         this.favPlayer = "Enter Player";
      }
    });

    //search local storage for user nationality and set default if not found
    this.storage.get('nationality').then((nat) => {
        //if found
      if(nat != null){
        let storedNation = nat;
        this.nationality = storedNation;
      }
      //set to default(Not Found)
      else{
         this.nationality = "Enter Nationality";
      }
    });
    //search local storage for user name and set default if not found 
    this.storage.get('dob').then((dob) => {
      //if found
      if(dob != null){
        let storedDob = dob;
        this.dob = storedDob;
      }
      //set to default(Not Found)
      else{
         this.dob = "dd/mm/yy";
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
      saveToPhotoAlbum: true, // saves photo to users gallery
  }

    this.camera.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.profilePicture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
        alert("Cannot Take Picture - Ensure you are on mobile device");
    });
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  //save user details to ionic storage
  saveUserDetails(){
    let name = this.name;
    let team = this.team;
    let favPlayer = this.favPlayer;
    let nationality = this.nationality;
    let dob = this.dob;

    this.storage.set('name' , name);
    this.storage.set('team' , team);
    this.storage.set('favPlayer' , favPlayer);
    this.storage.set('nationality', nationality);
    this.storage.set('dob', dob);

    // vibrate upon storage of details using vibration plugin
    this.vibration.vibrate(1000);

    alert("Details Updated");

    //navigate to homepage using navcontroller
    this.navCtrl.push(HomePage);
  }

}
