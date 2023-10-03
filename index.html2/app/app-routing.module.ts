import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { MatchesComponent } from './components/matches/matches.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"add-match", component:AddMatchComponent},
  {path:"edit-match/:id", component:AddMatchComponent},
  {path:"signup", component:SignupComponent},
  {path:"table-match", component:TableMatchComponent},
  {path:"matches", component:MatchesComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
