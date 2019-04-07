import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import { UserInformationService } from './app/services/user-information.service';
@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private services: UserInformationService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.services.isLogged()) {
      if(this.services.getUser() == null)
        this.services.fillUserInfo(JSON.parse(localStorage.getItem("TOKEN")));
      return true;
    }
    console.log("Not Logged");

    this.router.navigateByUrl("/login");

    return false;
  }
}