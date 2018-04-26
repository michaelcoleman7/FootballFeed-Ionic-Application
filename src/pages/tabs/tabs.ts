import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { AccountPage } from '../account/account';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //set tab roots
  tab1Root = HomePage;
  tab2Root = SettingsPage;
  tab3Root = AccountPage;

  constructor() {

  }
}
