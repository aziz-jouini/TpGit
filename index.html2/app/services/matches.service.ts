import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MatchesService {

  matchesUrl="http://localhost:3000/matches"
  constructor(private bostagi:HttpClient) { }

  addMatch(match:any){
    return this.bostagi.post<{data:any}>(this.matchesUrl,match)    
  }

  getAllMatches(){
    return this.bostagi.get<{data:any}>(this.matchesUrl)
  }
  getMatchById(id:any ){
    return this.bostagi.get<{data:any}>(`${this.matchesUrl}/${id}`)


  }
  updateMatch(match:any){
    return this.bostagi.put<{data:any}>(`${this.matchesUrl}/${match.id}`,match)

  }

  deleteMatch(id:any){
     return this.bostagi.delete<{data:any}>(`${this.matchesUrl}/${id}`)
  }
  
}
