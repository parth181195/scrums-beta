// import { DIRECTION_LEFT } from 'ionic-angular/gestures/hammer';
import { 
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { NavController,ActionSheetController,AlertController,ModalController  } from 'ionic-angular';
import { InviteModal } from "./invite-modal/invite"
import { PinnedBoardsPage } from "../pinned-boards/pinned-boards"
declare var $;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('state',[
      state("1",style({
        zindex:50,
        opacity:1,
        left: "50%",
        top: "45%",
        margin: "-42% 0 0 -42%",
        transform: "scale(1)"
      })),
      state("2",style({
        zindex:45,
        opacity:0.75,
        top: "39%",
        left: "50%",
        margin: "-42% 0 0 -42%",
        transform: "scale(0.9)"
      })),
      state("3",style({
        zindex:40,
        opacity:0.50,
        top: "33%",
        left: "50%",
        margin: "-42% 0 0 -42%",
        transform: "scale(0.81)"
      })),
      state("4",style({
        zindex:35,
        opacity:0.25,
        top: "27%",
        left: "50%",
        margin: "-42% 0 0 -42%",
        transform: "scale(0.729)"
      })),
      state("5",style({
        zindex:50,
        opacity:1,
        left: "-100%",
        margin: "-42% 0 0 -42%",
        transform: "scale(1)"
      })),
      state("6",style({
        zindex:50,
        opacity:1,
        left: "100%",
        margin: "-42% 0 0 -42%",
        transform: "scale(1)"
      })),
      state("0",style({
        zindex:30,
        opacity:0,
        // top: "45%",
      })),
      state("7",style({
        top: "45%",
        margin: "-42% 0 0 -42%",
        transform: "scale(1)"
      })),
      transition('7 <=> 1', animate('200ms ease-in')),
      transition('1 <=> 6', animate('200ms ease-in')),
      transition('1 <=> 5', animate('200ms ease-in')),
      transition('1 <=> 4', animate('200ms ease-in')),
      transition('2 <=> 1', animate('200ms ease-in')),
      transition('3 <=> 2', animate('200ms ease-in')),
      transition('4 <=> 3', animate('200ms ease-in')),
    ])
  ]
})
export class HomePage {
  cards;
  constructor(public navCtrl: NavController, public actionCtrl: ActionSheetController, public alertCtrl :AlertController,public modCtrl: ModalController) {

  }



  swipeEvent(e) {
    console.log("swiped");
    // console.log($("#location_0").css("left"));
    this.boards[0]["left"] = "50%";
    this.boards[0]["state"] = 7;
    if(e.direction == 2){
      this.boards[0]["state"] = 6;
      this.change(1);
      }
    else if(e.direction == 4){
      this.boards[0]["state"] = 5;
      this.change(1);
      }
    
  }
  pan(e){
    let dist = $("#location_0").css("left")
    var res = Number(dist.replace("px",""));
    let test = res + (e.distance * (e.velocityX))
    this.boards[0]["state"] = 7;
    // console.log(this.boards[0]["state"]);
    // console.log(res,"+",e.distance,"---",test);
    this.boards[0]["left"] = test+"px";
  }
  panStop(e){
    if(e.distance < 50){
    this.boards[0]["state"] = 1;
    // console.log(e.distance);
  }
  else{
    if(e.direction == 2){
    this.boards[0]["state"] = 6;
    }
    else if(e.direction == 4){
    this.boards[0]["state"] = 5;
    }
    this.change(1)
    }
  }

boards;
  ionViewDidLoad() {
  this.boards = [
    {
      'title' : 1
    },
    {
      'title' : 2
    },
    {
      'title' : 3
    },
    {
      'title' : 4
    },
    {
      'title' : 5
    },
    {
      'title' : 6
    },
    {
      'title' : 7
    },
    {
      'title' : 8
    },
  ]
  for(let i = 0; i < this.boards.length; i++) {
    let board = this.boards[i];
    board['left'] = "50%";
    board['state'] = 0;
    if(i<4){
    board['state'] = i+1;
    }
    // console.log(board['state']);
    
  }
  }
  change(dir){
    let temp = this.boards[0]
    this.boards[0]["state"]=0
    this.boards.push(temp)
    this.boards.splice(0,1)
    for(let i = 0; i<this.boards.length; i++){
      let board = this.boards[i];
      // console.log(this.boards[i]["state"]);
      if(i<4){
      board["state"]= i+(1*dir)
    }
    else{
      board["state"]= 0
    }
    }
  }
  //---------------//
  //  navigation   //
  //---------------//

  GotoPinned(){
    this.navCtrl.setRoot(PinnedBoardsPage)
  }
   presentInviteModal() {
   let contactModal = this.modCtrl.create(InviteModal);
   contactModal.present();
 }
    showConfirm(titleArgs,discArgs) {
    let confirm = this.alertCtrl.create({
      title: titleArgs+"?",
      message: 'Are you sure that you want to '+discArgs+'?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
openSheet(){
  let actionSheet = this.actionCtrl.create({
     title: 'Utilities',
     buttons: [
                     {
         text: 'Color',
         
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Remove My Self',
         role: 'destructive',
         handler: () => {
           this.showConfirm("Remove Yourself","remove yourself from this board")
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Delete',
         role: 'destructive',
         handler: () => {
           this.showConfirm("Delete this Board","delete this board")
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
   actionSheet.present();
 }

}



