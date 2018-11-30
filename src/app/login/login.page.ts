import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor( public alertCtrl: AlertController) {
  }

  async forgotPassword() {
    let forgotpas = await this.alertCtrl.create({
      header: 'Forgot password?',
      subHeader: 'Enter your email address to reset your password',
      inputs: [
        {
          name: 'email',
          placeholder: 'E-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
          }
        }
      ]
    });
    return await forgotpas.present();
  }

}
