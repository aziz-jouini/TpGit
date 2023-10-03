import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input() match: any
  @Output() newEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  passId(id: any) {
    
    this.newEvent.emit(id)

  }

  
  compare(a:any,b:any){
    if (Number(a)>Number(b)) {
      return ["green","Win"]     
    }
    if (Number(a)<Number(b)) {
      return ["blue","Loss"]      
    }
    else{
      return ["yellow","Draw"]
    }
  }

}
