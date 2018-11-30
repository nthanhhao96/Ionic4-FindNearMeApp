import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sharepopup',
  templateUrl: './sharepopup.page.html',
  styleUrls: ['./sharepopup.page.scss'],
})
export class SharepopupPage {
  constructor(public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharepopupPage');
  }

  close() {
  this.modalCtrl.dismiss();
  }

}
