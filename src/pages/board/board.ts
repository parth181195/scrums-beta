import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DoingTab } from './doing/doing';
import { DoneTab } from './done/done';
import { EmergencyTab } from './emergency/emergency';
import { ToDoTab } from './to-do/to-do';

/*
  Generated class for the Board page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-board',
  templateUrl: 'board.html'
})
export class BoardPage {
  tab1 :any; 
  tab2 :any; 
  tab3 :any;  
  tab4 :any;  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = ToDoTab;
    this.tab2 = DoingTab;
    this.tab3 = EmergencyTab;
    this.tab4 = DoneTab
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BoardPage');
  }

}
