import { Component } from '@angular/core';

import { NavController,ViewController  } from 'ionic-angular';

@Component({
  selector: 'Modal-Invite',
  templateUrl: 'invite.html'
})
export class InviteModal {;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {

  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}



