import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sec-list',
  templateUrl: './sec-list.page.html',
  styleUrls: ['./sec-list.page.scss'],
})
export class SecListPage {
  tabBarElement: any;
  secList: Array<any>;

  constructor(public popoverCtrl: PopoverController) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.secList = [
      { img: 'assets/images/001.png', title: 'Restaurant', rate: '5.0' },
      { img: 'assets/images/002.png', title: 'Restaurant2', rate: '4.8' },
      { img: 'assets/images/003.png', title: 'Restaurant3', rate: '4.3' },
      { img: 'assets/images/001.png', title: 'Restaurant4', rate: '4.0' }
    ];
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  likeItem(item) {
    item.like = !item.like;
  }

  async sharePopover(myEvent) {
    let popover = await this.popoverCtrl.create({
      component: 'SharepopupPage',
      event: myEvent,
      cssClass: 'share-popover'
    });
    return await popover.present();
  }
}

