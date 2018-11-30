import { Component } from '@angular/core';
import { NavController, App  } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }
  openprofile() {
    this.navCtrl.navigateBack('ProfilePage');
  }
  logout() {
   this.navCtrl.navigateRoot('LoginPage');
  }
}
