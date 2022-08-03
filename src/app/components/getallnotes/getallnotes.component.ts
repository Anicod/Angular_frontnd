import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  allNotes :any = null ;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getNotes();

  }
  getNotes(){
    this.note.getUrl().subscribe(
      (res:any) => {
      this.allNotes = res.data.data
    }
    )
    
  }
  reciveMessageEvent(event:any){
    console.log(event);
    this.getNotes();
  }
}
