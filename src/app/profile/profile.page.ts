import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import 'intl-tel-input';
import $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isDisabled: boolean = true;
  img = 'assets/images/default.png';

  constructor(
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera) {
  }

  changeData(input) {
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit(): any {
    let telInput = $('#elemtId');
    let output = $('#output');

    telInput.intlTelInput();
    // listen to 'keyup', but also 'change' to update when the user selects a country
    telInput.on('keyup change', function () {
      const intlNumber = telInput.intlTelInput('getNumber');
      if (intlNumber) {
        output.text('International: ' + intlNumber);
      } else {
        output.text('Please enter a number below');
      }
    });
  }


  async getPhoto() {
    const buttons = [
      {
        text: 'Camera',
        handler: () => {
          this.get_camera(2);
        }
      }, {
        text: 'Gallery',
        handler: () => {
          this.get_camera(1);
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        handler: () => { }
      }

    ];
    if (this.img !== 'assets/images/default.png') {
      let butttondelete = { text: 'Delete', handler: () => { this.delete_image(); } };
      buttons.push(butttondelete);
    }
    const actionSheet = await this.actionSheetCtrl.create({ buttons: buttons });
    await actionSheet.present();
  }

  delete_image() {
    this.img = 'assets/images/default.png';
  }

  get_camera = function (source) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      targetWidth: 80,
      targetHeight: 80,
      correctOrientation: true
    };

    if (source === 1) {
      options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
    } else {
      options.sourceType = this.camera.PictureSourceType.CAMERA;
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.img = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert('camera.getPicture ... error');
    });
  };

}

