import { Component,OnInit  } from '@angular/core';

import { NavController } from 'ionic-angular';

// declare var Hammer;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pan: number = 0;
  constructor(public navCtrl: NavController) {
    
  }
    panEvent(e) {
      console.log(e);
      
    this.pan++
  }
  //   ngOnInit(){
  // }
  }

