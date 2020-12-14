import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityServiceService {
  private  baseURL = "/user/"
  private _oauthUrl="/oauth/token"

  constructor(private http: HttpClient) { }


  registerUser(user:any):any {
    return this.http.post(this.baseURL+"createAccount", user)
  }  
  
  
  login(loginData: any): any {

    const body = new HttpParams()
      .set('username', loginData.username)
      .set('password', loginData.password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(loginData.username + ':' + loginData.password),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this._oauthUrl, body, { headers });
  }

  authenticateAndGetUserRoles(value: any): any {
    return this.http.post(this.baseURL + 'authenticateAndGetUserRoles', value);
  }
}
