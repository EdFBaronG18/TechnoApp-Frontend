import { Component } from '@angular/core';
import { UserInformationService } from './services/user-information.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TechnoApp';
  check : boolean;
  
  constructor(private userInfo: UserInformationService, private router: Router, private translate: TranslateService){
    this.translate.setDefaultLang('es'); 
  }

  logout(){
    this.userInfo.logout();
    this.router.navigateByUrl("/login");
  }

  addArtist(){
    this.router.navigateByUrl("/addArtist");
  }

  changeLanguage(){
    if(this.check)
      this.translate.setDefaultLang('en');
    else
      this.translate.setDefaultLang('es'); 
  }
}
