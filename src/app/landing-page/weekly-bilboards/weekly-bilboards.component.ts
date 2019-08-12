import { Component, OnInit } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-weekly-bilboards',
  templateUrl: './weekly-bilboards.component.html',
  styleUrls: ['./weekly-bilboards.component.css']
})
export class WeeklyBilboardsComponent implements OnInit {

  peliculas: Movies[] = [];

  constructor(public landingPageService: LandingPageService) { }

  ngOnInit() {
    this.getWeeklyBilboards();
  }

  getWeeklyBilboards(){
    this.landingPageService.getMovies().subscribe((movies)=> {
      this.peliculas = movies;
    });
  }

}
