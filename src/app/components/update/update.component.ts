import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title:any
  desec:any
  noteId:any
  @Output() messageEvent = new EventEmitter<string>()
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private note:NoteService
  ) {}
  
  ngOnInit(): void {
  console.log("inside update",this.data)
  this.title=this.data.title,
  this.desec=this.data.description,
  this.noteId=this.data.id

    
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  close(){
    console.log(this.title)
    console.log(this.desec)
    let data = {
      title:this.title,
      description:this.desec,
      noteId:this.noteId

    }
    this.note.updateNote(data).subscribe((res:any)=>{
      console.log(res)
      this.messageEvent.emit()
      })
    
  }

}
