import { Injectable } from '@angular/core';
import { User } from '../model/object';
import { HttpParams, HttpClient } from '@angular/common/http';

const TOKEN = "TOKEN";

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  private user: User;

  constructor(private http: HttpClient) {
    this.user = null;
  }
  getUser(): User{
    return this.user;
  }
  fillUserInfo(user: User){
    this.user = user;
  }
  getName(): String{
    return this.user.name;
  }
  logout(){
    this.user = null;
    localStorage.removeItem(TOKEN);
  }

  autenticate(username: String, password: String) {
    const body = new HttpParams()
      .set("username", username + "")
      .set("password", password + "");
      return null;
   //TODO return this.http.post(environment.urlAutenticate, body);
  }
  
  isLogged(){
    return localStorage.getItem(TOKEN) != null;
  }

  loggin(information: string){
    localStorage.setItem(TOKEN, information);
  }
  
}
