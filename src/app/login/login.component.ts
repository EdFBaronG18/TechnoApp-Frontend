import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInformationService } from '../services/user-information.service';
import { User } from '../model/object';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: String;
  private password: String;
  private message : String;
  public hide = true;
  
  constructor(private servicioLogin: UserInformationService,public router: Router) {
    
    if(servicioLogin.isLogged())
        this.router.navigateByUrl("/artists");

   }

  ngOnInit() {
  }
  
  async login(){
    let responseAutentication: any;
    let user : User;
    await this.servicioLogin.autenticate(this.username, this.password).subscribe(
      dataResponse => {
        responseAutentication = dataResponse;
          console.log(responseAutentication);
          user = <User>responseAutentication;

          if(user != null){
              this.servicioLogin.loggin(JSON.stringify(user));
              this.servicioLogin.fillUserInfo(user);
              this.router.navigateByUrl("/artists");
          }
          else
            this.message = "Usuario o contraseña incorrecta.";
      }, 
    );
  }
  

}
