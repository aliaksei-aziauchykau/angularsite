import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { User } from '../model/user';
import { Role } from '../model/role';

@Injectable()
export class ExpertGuardService implements CanActivate {

  identity: User;
  constructor(
    public userService: UserService,
    public router: Router
    ) { }


  canActivate(): boolean {
    if (this.userService.isTokenExpired() || !this.userService.theIdentity() || this.userService.theIdentity().roles.indexOf(Role.EXPERT) == -1) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
