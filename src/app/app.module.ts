import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatContainerComponentModule } from './pages/chatContainer/chatContainer.component';
import { JoinChatComponentModule } from './pages/joinChat/joinChat.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChatContainerComponentModule,
    JoinChatComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
