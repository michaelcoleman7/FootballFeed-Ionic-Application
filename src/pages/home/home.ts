import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsStories: any[] = [];


  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {
  }

  ionViewWillEnter(){
    //subscribe to news api from newsprovider
    this.newsProvider.getNews().subscribe(data => {
      console.log(data);
      this.newsStories = data.articles;
    });
  }

}
