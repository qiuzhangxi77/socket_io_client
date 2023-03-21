import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-joinChat',
  templateUrl: './joinChat.component.html',
  styleUrls: ['./joinChat.component.css'],

})
export class JoinChatComponent implements OnInit {
  public username = "";
  public room = "Chinese";
  
  constructor(
    private _socketService: SocketService, 
    private _route: ActivatedRoute,
    private _router: Router,) { }

  ngOnInit() {
  }

  public connectSocket() {
    this._socketService.connectSocket();
    this._socketService.initClientInfo(this.username, this.room);
    this._router.navigate(['chatRoom'], {
      relativeTo: this._route.parent
    });
  }

  public updatedSelectRoom(event: any) {
    this.room = event.value;
}

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [JoinChatComponent],
  exports: [JoinChatComponent]
})
export class JoinChatComponentModule { }
