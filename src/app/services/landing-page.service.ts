import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialNetWork } from '../landing-page/navbar-social/social-network';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  apiRedes: string = 'RedesSociales.json';
  apiPeliculas: string = 'Peliculas.json';

  constructor(public http: HttpClient) { }

  getSocialNetworks(): Observable<SocialNetWork[]>{
    return this.http.get<SocialNetWork[]>(`${environment.API}${this.apiRedes}`);
  }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${environment.API}${this.apiPeliculas}`);
  }
}
