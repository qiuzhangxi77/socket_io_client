import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { io } from "socket.io-client";
import { Socket } from 'socket.io-client/build/esm/socket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public mySocket!: Socket;
  public room: String = "";
  public username: String = "";
  
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  /**
   * joinRoom
   */
  public connectSocket() {
    this.mySocket = io("ws://localhost:3000");
    this.mySocket.on("connect", () => {
      if (this.mySocket.connected) {
        console.log("successfully connect socket id: ", this.mySocket.id);
        this._router.navigate(['chatRoom']);
      }
    })
  }

  public disConnectSocket() {
    this.mySocket.disconnect();
  }

  public isSocketConnected() {
    return this.mySocket?.connected;
  }

  public initClientInfo(username: string, room: string) {
    this.username = username;
    this.room = room;
  }

  public clearClientInfo() {
    this.username = "";
    this.room = "";
  }

  public get socket() {
    return this.mySocket
  }


}
