import { Injectable } from '@angular/core';
import { User } from '../model/object';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

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
    const body = new HttpHeaders()
      .set("username", username + "")
      .set("password", password + "");
      
      return this.http.get(environment.urlAutenticate, {headers: body});
  }
  
  isLogged(){
    return localStorage.getItem(TOKEN) != null;
  }

  loggin(information: string){
    localStorage.setItem(TOKEN, information);
  }
  
}
