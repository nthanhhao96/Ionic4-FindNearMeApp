import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  list: Array<any>;

  constructor() {
    this.list = [{ img: 'assets/images/01.png', title: 'Restaurant', num: '1' },
    { img: 'assets/images/02.png', title: 'Hotel', num: '3' },
    { img: 'assets/images/03.png', title: 'Stores', num: '2' },
    { img: 'assets/images/04.png', title: 'Bank', num: '4' },
    { img: 'assets/images/05.png', title: 'Hospital', num: '5' },
    { img: 'assets/images/06.png', title: 'University', num: '6' },
    { img: 'assets/images/07.png', title: 'Bar', num: '7' },
    { img: 'assets/images/09.png', title: 'Airport', num: '8' },
    { img: 'assets/images/08.png', title: 'Help', num: '9' },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
