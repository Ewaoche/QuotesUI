import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private ApiUrl = "https://emmysquotes.herokuapp.com/api/v1/getQuotes";
//  private ApiUrl = 'http://localhost:3000/api/v1/getQuotes';
  constructor(private httpclient:HttpClient) { }

  public getRandomQuotes(){
    return this.httpclient.get(this.ApiUrl);
  }
}
