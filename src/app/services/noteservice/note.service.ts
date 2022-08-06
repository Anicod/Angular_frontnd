import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpservice/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any
  constructor(private httpService:HttpService) { 
    this.token=localStorage.getItem('token')
  }
  addnote(data:any){
    console.log(this.token)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
   return this.httpService.postService('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', data, true, header)
  }

  getUrl(){
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', true, header)
  }
  updateNote(data:any)
    {
      let header = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.token
        })
      }
      return this.httpService.postService('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', data, true, header )
  }
}
 