import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class logGuard  {

  constructor(public userSer : UsersService, public myRouter : Router)
  {

  }

  canActivate():  boolean  {

    if(!!this.userSer.isLoggedIn())
    {
      this.myRouter.navigateByUrl("/profile");
    }

    return !this.userSer.isLoggedIn();
  }
}
  