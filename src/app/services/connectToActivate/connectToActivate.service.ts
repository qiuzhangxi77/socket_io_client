import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SocketService } from '../socket.service';

@Injectable({
  providedIn: 'root'
})
export class ConnectToActivateService implements CanActivate {

constructor(
  private _router: Router,
  private _socketService: SocketService, 
) { }

  public canActivate() {
    if (!this._socketService.isSocketConnected()) {
      this._router.navigate(['']);
      return false
    }
    // Otherwise, allow them to continue (e.g., to the login page).
    return true;
  }
}
