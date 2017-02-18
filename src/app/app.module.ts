import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { InviteModal } from '../pages/home/invite-modal/invite';
import { PinnedBoardsPage } from '../pages/pinned-boards/pinned-boards';
import { BoardPage } from '../pages/board/board';
import { DoingTab } from '../pages/board/doing/doing';
import { DoneTab } from '../pages/board/done/done';
import { EmergencyTab } from '../pages/board/emergency/emergency';
import { ToDoTab } from "../pages/board/to-do/to-do"
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {

    apiKey: "AIzaSyD4zuMZhVgZ1xLMsTb0AHKeRYpoXjwdfyo",
    authDomain: "scrums-e17a0.firebaseapp.com",
    databaseURL: "https://scrums-e17a0.firebaseio.com",
    storageBucket: "scrums-e17a0.appspot.com",
    messagingSenderId: "603416178541"

};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InviteModal,
    PinnedBoardsPage,
    BoardPage,
    DoingTab,
    DoneTab,
    EmergencyTab,
    ToDoTab,
    LoginPage,
    SignupPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InviteModal,
    PinnedBoardsPage,
    BoardPage,
    DoingTab,
    DoneTab,
    EmergencyTab,
    ToDoTab,
    LoginPage,
    SignupPage,

  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

