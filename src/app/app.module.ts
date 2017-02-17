import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InviteModal } from '../pages/home/invite-modal/invite';
import { PinnedBoardsPage } from '../pages/pinned-boards/pinned-boards';
import { BoardPage } from '../pages/board/board';
import { DoingTab } from '../pages/board/doing/doing';
import { DoneTab } from '../pages/board/done/done';
import { EmergencyTab } from '../pages/board/emergency/emergency';
import { ToDoTab } from "../pages/board/to-do/to-do"
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

  ],
  imports: [
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
