import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

/*
  Generated class for the Board page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'to-do-tab',
  templateUrl: 'to-do.html'
})
export class ToDoTab {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  close(slidingItem: ItemSliding){
    // slidingItem.moveSliding(10)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

}
