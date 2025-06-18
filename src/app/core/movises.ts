import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movieContainer } from '../Models/Imovises';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Movises {

  private _HttpClient = inject(HttpClient);

  /*-------------------------------بجيب الافلام من الداتا بيز----------------------------------------------------- */
  getMovie(pageNumber: number): Observable<movieContainer> {
    return this._HttpClient.get<movieContainer>(
      `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${pageNumber}`
    );
  }

  /*-------------------------------details ---------------------------------------------------- */
  getMoviedetails(id: number): any {
    return this._HttpClient.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }

  /*-------------------------------recommended ---------------------------------------------------- */
  getrecommended(id: number): any {
    return this._HttpClient.get(
      `${environment.baseUrl}/movie/${id}/recommendations?api_key=${environment.apiKey}`
    );
  }

  /*-------------------------------Search function ---------------------------------------------------- */
  searchMovies(query: string): Observable<movieContainer> {
    return this._HttpClient.get<movieContainer>(
      `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query=${encodeURIComponent(query)}`
    );
  }
}

