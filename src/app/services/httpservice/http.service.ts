import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  postService(url:string, data:any, token:boolean=false, httpoptions:any){
    this.httpClient.post(url, data, token && httpoptions )


  }
  getService(){

  }

  putService(){

  }
  deleteService(){

  }
}
