import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { NewsComponent } from './components/news/news.component';
import { NextMatchComponent } from './components/next-match/next-match.component';
import { BlogComponent } from './components/blog/blog.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { TableMatchComponent } from './components/table-match/table-match.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BannerComponent } from './components/banner/banner.component';
import { MatchComponent } from './components/match/match.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ColorDirective } from './directive/color.directive';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    NewsComponent,
    NextMatchComponent,
    BlogComponent,
    AddMatchComponent,
    SignupComponent,
    LoginComponent,
    TableMatchComponent,
    MatchesComponent,
    BannerComponent,
    MatchComponent,
    ColorDirective,
    ReversePipe,
    FilterPipe, 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IvyCarouselModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
