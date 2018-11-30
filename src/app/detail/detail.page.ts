import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {

  tabBarElement: any;
  selecttype: any;
  icons: Array<any>;

  constructor( public popoverCtrl: PopoverController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.icons = ['star', 'star', 'star', 'star-half', 'star-outline'];
  }

  showMap(index) {
    this.selecttype = index;
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  async sharePopover(myEvent) {
    const popover = await this.popoverCtrl.create({
      component: 'SharepopupPage',
      event: myEvent,
      cssClass: 'share-popover'
    });
    return await popover.present();
  }

}
