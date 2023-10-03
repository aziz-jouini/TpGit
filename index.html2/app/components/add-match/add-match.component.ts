import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title: string = "ADD Match"
  constructor(private Router: Router, private activatedRoute: ActivatedRoute, private matchService: MatchesService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    if (this.id) {
      this.title = "Edit Match"
      this.getMatchById()
    }


  }


  addEditMatch() {
    if (this.id) {
      // let matches= JSON.parse(localStorage.getItem("matches")||"[]")  
      // for (let i = 0; i < matches.length; i++) {
      //   if (matches[i].id === Number(this.id)) {         
      //     matches[i]=this.match   
      //   }    
      // }
      // localStorage.setItem("matches",JSON.stringify(matches))
      // this.Router.navigate(["table-match"])

      this.matchService.updateMatch(this.match).subscribe((result) => {
        console.log("here result", result);
        this.Router.navigate(["table-match"])
      })

    } else {
      // let T= JSON.parse(localStorage.getItem("matches") || "[]") 

      // T.push( this.match)
      // localStorage.setItem("matches",JSON.stringify(T))
      // this.Router.navigate(["table-match"])
      let matchId = JSON.parse(localStorage.getItem("matchId") || "0")
      this.match.id = matchId

      this.matchService.addMatch(this.match).subscribe(
        (result) => {
          console.log("here result", result);
          this.Router.navigate(["table-match"])

        }
      )

      localStorage.setItem("matchId", JSON.stringify(matchId + 1))


    }




  }


  getMatchById() {
    // let matches= JSON.parse(localStorage.getItem("matches")||"[]")  
    // for (let i = 0; i < matches.length; i++) {
    //   if (matches[i].id === Number(this.id)) {
    //     this.match=matches[i]        
    //   }    
    // }
    this.matchService.getMatchById(this.id).subscribe((result) => {
      console.log("here into get match  by id", result);
      this.match = result
    })
  }
}
