import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private registerUrl = "https://emmysquotes.herokuapp.com/api/v1/register";
  // private registerUrls = 'http://localhost:3000/api/v1/register';
  // private loginURL = 'http://localhost:3000/api/v1/login';
  private loginURL = 'https://emmysquotes.herokuapp.com/api/v1/login';


  constructor(private http:HttpClient) { }


  registerUsers(user:any){
    return  this.http.post<any>(this.registerUrl, user)
  }
  loginUsers(user:any){
    return  this.http.post<any>(this.loginURL, user)
  }

  loggedIn(){
    return !! localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
