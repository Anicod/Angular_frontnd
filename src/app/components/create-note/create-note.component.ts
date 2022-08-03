import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
   @Output() messageEvent = new EventEmitter<string>()
   isshow = false;
   title:any="this is title"
   desec:any="this is description"
  constructor(private note:NoteService) { }

 
  
  ngOnInit(): void {
   
  }
  show(){
   
    this.isshow = true;
  }
  close(){
    this.isshow = false;
    console.log(this.title,this.desec)
    let data={
      title:this.title,
      description:this.desec
    }
    this.note.addnote(data).subscribe((response:any)=>{
      console.log(response)
      this.messageEvent.emit()
    })
  }
}
