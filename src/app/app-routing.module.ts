import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './pages/chatContainer/chatContainer.component';
import { JoinChatComponent } from './pages/joinChat/joinChat.component';
import { ConnectToActivateService } from './services/connectToActivate/connectToActivate.service';

const routes: Routes = [
  {
    path:'',
    component: JoinChatComponent,
  },
  {
    path:'chatRoom',
    component: ChatContainerComponent,
    canActivate: [ConnectToActivateService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
