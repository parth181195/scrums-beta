import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/*
  Generated class for the PinnedBords page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pinned-boards',
  templateUrl: 'pinned-boards.html'
})
export class PinnedBoardsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
goToHome(){
    this.navCtrl.setRoot(HomePage)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PinnedBordsPage');
  }

}
