import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

 @Input() data:any;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
func(){
  console.log(this.data)
}
}
