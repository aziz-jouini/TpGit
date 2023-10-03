import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any=[]
  term:any

  public images = [
    {
      path: 'https://itinerate-thumbnails-dev.s3.ap-south-1.amazonaws.com/d6d242fc-67a2-4ed8-8368-def6662e02fe.jpg',
    },
    {
      path: 'https://itinerate-thumbnails-dev.s3.ap-south-1.amazonaws.com/92b0069d-fcd5-400f-81f8-4fca00e20594.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2020/01/17/16/33/landscape-4773359_1280.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.getAllMatches()
  }

  getAllMatches(){
    this.matches= JSON.parse(localStorage.getItem("matches")||'[]')
  }


  deleteMatch(id:any){    
    for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        this.matches.splice(i, 1)
      }
    }
    localStorage.setItem("matches", JSON.stringify(this.matches))
  }

  

}
