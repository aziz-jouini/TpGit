import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  X=0;
  constructor() { }

  ngOnInit(): void {
    console.log("here into contact");

  }

  add(){
    this.X=this.X+1

  }

}
