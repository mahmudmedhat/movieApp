import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  movieContainer,IMovises } from '../Models/Imovises';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Movises {


private _HttpClient=inject(HttpClient)
/*-------------------------------بجيب الافلام من الداتا بيز----------------------------------------------------- */
getMovie(pageNumber:number):Observable<movieContainer>
{
 return  this._HttpClient.get<movieContainer>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${pageNumber}`)
}
/*-------------------------------details ---------------------------------------------------- */
getMoviedetails(id:number):any
{

 return  this._HttpClient.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey} `)
}
/*-------------------------------recommended ---------------------------------------------------- */
getrecommended(id:number):any
{
 return  this._HttpClient.get(`${environment.baseUrl}/movie/${id}/recommendations?api_key=${environment.apiKey} `)
}

/*-------------------------------search ---------------------------------------------------- */

searchMovies(query: string): Observable<{ results: IMovises[] }> {
  return this._HttpClient.get<{ results: IMovises[] }>(
    `${environment.baseUrl}/search/movie?api_key=${environment.apiKey}&query=${query}`
  );
}
}
