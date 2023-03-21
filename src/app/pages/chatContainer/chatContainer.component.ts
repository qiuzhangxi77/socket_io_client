import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'socket.io-client/build/esm/socket';
import { SocketService } from 'src/app/services/socket.service';

export interface messageType {
  username: string;
  text: string;
  time: Date;
}

export interface userType {
  id: string,
  username: string,
  room: string
}

@Component({
  selector: 'app-chatContainer',
  templateUrl: './chatContainer.component.html',
  styleUrls: ['./chatContainer.component.css']
})
export class ChatContainerComponent implements OnInit {
  public messages: messageType[]= [];
  public socket!: Socket;
  public inputMessage =  "";
  
  public room!: String;
  public users!: userType[];
  constructor(
    private _socketService: SocketService, 
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.initListen();
  }

  public initListen() {
    this.socket = this._socketService.socket;
    // Join chatroom
    this.socket.emit('joinRoom', {
      username: this._socketService.username,
      room: this._socketService.room
    });

    // Get room and users
    this.socket.on('roomUsers', ({ room, users}) => {
      console.log(`receive roomUsers`);
      console.log("room: ", room);
      console.log("roomUsers: ", users);
      this.room = room
      this.users = users;
    });

    // Message from server
    this.socket.on('message', (message) => {
      console.log(message);
      this.messages.push(message);
    });
  }

  public leaveRoom() {
    const leaveRoom = window.confirm('Are you sure you want to leave the chatroom?');
    if (leaveRoom) {
      this._socketService.disConnectSocket();
      this._socketService.clearClientInfo();
      this._router.navigate(['']);
    }
  }

  public sendMessage() {
    const msg = this.inputMessage.trim();
    this.socket.emit('chatMessage', msg);
  }
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [ChatContainerComponent],
  exports: [ChatContainerComponent]
})
export class ChatContainerComponentModule { }
