import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) {}
  register(abcd:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', abcd, false, header)

  }
  login(abcd:any){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.postService('http://fundoonotes.incubation.bridgelabz.com/api/user/login', abcd, false, header)
  }
}
