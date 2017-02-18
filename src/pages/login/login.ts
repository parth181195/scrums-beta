import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { HomePage } from '../home/home'
import { SignupPage } from '../signup/signup'
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  error:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFire) {
    // this.af.auth.subscribe(auth => { 
    //   if(auth) {
    //     this.navCtrl.setRoot(HomePage)
    //   }
    // });

  }

loginGoogle() {
  this.navCtrl.setRoot(HomePage)
  }
goToSignUp(){
  this.navCtrl.setRoot(SignupPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
