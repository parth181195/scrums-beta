import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InviteModal } from '../pages/home/invite-modal/invite';
import { PinnedBoardsPage } from '../pages/pinned-boards/pinned-boards';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InviteModal,
    PinnedBoardsPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InviteModal,
    PinnedBoardsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
