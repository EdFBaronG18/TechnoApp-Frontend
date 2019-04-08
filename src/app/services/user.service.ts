import { Injectable } from '@angular/core';
import { User } from '../model/object';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  registerUser(user: User, password: String){
    console.log("USUARIO A INSERTAR:", User);
    const body = new HttpParams()
      .set("username", user.username + "")
      .set("content", user.name + "")
      .set("password", password + "");
      return this.http.post(environment.urlAddUser, body).subscribe();
  }

  userDontExist(username: String){
    const body = new HttpParams()
      .set("username", username + "");
    return null==this.http.post(environment.urlGetUserByUsername, body).subscribe();
  }

}
