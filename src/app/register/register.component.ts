import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../model/object";
import { UserService } from "../services/user.service";
import { element } from '@angular/core/src/render3';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  private passwordA: String;
  private passwordB: String;
  private registerError: String;
  myUser: User;
  name: String;

  constructor(private userService: UserService, public router: Router) {
    this.myUser = new User();
  }

  ngOnInit() {}

  async addNewUser() {
    var good = true;
    this.registerError = "No se ha podido registrar al usuario:\n";

    await this.userService.userDontExist(this.myUser.username).subscribe(
      element =>{
        console.log("ELEMENT", element);
        console.log("RESPOS", element != null);
        
        if ((this.myUser.username.length == 0) || (element != null)){
          this.registerError += "- Nombre de usuario inválido\n";
          this.myUser.username = "";
          good = false;
        }
        if (!( this.validateName(this.myUser.name))) {
          this.registerError += "- Nombre inválido\n";
          good = false;
        }
        if (this.passwordA != this.passwordB) {
          this.registerError += "- Las contraseñas no coinciden\n";
          good = false;
        } else {
          if (!this.validatePassword(this.passwordA)) {
            this.registerError += "- Contraseña inválida\n";
            good = false;
          }
        }
    
        if (good) {
          this.userService.registerUser(this.myUser, this.passwordA);
          this.myUser = new User();
          this.router.navigateByUrl("/login");
        } else {
          alert(this.registerError);
          this.passwordA = this.passwordB = "";
        }
      }
    );


  }

  private validateName(name: String): boolean {
    return name.length != 0;
  }

  private validatePassword(pass: String): boolean {
    return pass.length > 3;
  }
}
