import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/services/matches.service';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent implements OnInit {

  title="Table Matches"
  matches: any = []
  constructor(private router:Router , private matchesService:MatchesService) { }

  ngOnInit(): void {

    this.getAllMatches()
  }

  getAllMatches() {
    // this.matches = JSON.parse(localStorage.getItem("matches") || '[]')
    this.matchesService.getAllMatches().subscribe((result)=>{
      console.log("heree matches into com",result);
      
      this.matches=result
    })

  }

  delete(id: any) {
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (id === this.matches[i].id) {
    //     this.matches.splice(i, 1)
    //   }
    // }
    // localStorage.setItem("matches", JSON.stringify(this.matches))

    this.matchesService.deleteMatch(id).subscribe((result)=>{
      console.log("here delete",result);
      this.getAllMatches()
    })

  }

  navigate(id: any){
    this.router.navigate(["edit-match/"+id])
  }

}
