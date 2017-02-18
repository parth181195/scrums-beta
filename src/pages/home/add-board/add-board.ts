import { Component } from '@angular/core';

import { NavController,ViewController  } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'Modal-add-board',
  templateUrl: 'add-board.html'
})
export class AddBoardModal {
  boardForm : FormGroup;
  boards: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController,af: AngularFire) {
     this.boards = af.database.list('/boards');
     this.boardForm = new FormGroup({
       'boardname': new FormControl('', Validators.required),
     })
  }

pushdata(){
  console.log(this.boardForm.value["boardname"]);
  
  if(this.boardForm.valid){
  this.boards.push( {name: this.boardForm.value["boardname"]})
  }
}
dismiss() {
    this.viewCtrl.dismiss();
  }
}



