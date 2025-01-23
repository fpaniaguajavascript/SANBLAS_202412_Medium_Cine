import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMovie } from '../interfaces/imovie';

@Injectable({
  providedIn: 'root'
})
export class MoviesManagerService {
  static URL = 'https://fpaniaguajavascript.github.io/movies-250.json';
  private movies : IMovie[] = [];
  private httpClient = inject(HttpClient);
  constructor() { 
    this.httpClient.get(MoviesManagerService.URL).subscribe(
      (data : IMovie[] | any) => {
        
        /*
                {
                  "date": "2022-04-03",
                  "movies": [
                    {
                      "Title": "The Shawshank Redemption",
                      "Year": "1994",
                      "Rated": "R",
                      "Released": "14 Oct 1994",
                      "Runtime": "142 min",
        */
       //(Siguiente línea) data.movies es el acceso a la propiedad movies del objeto que nos devuelve el servidor
        data.movies.forEach((movie : IMovie) => {
          this.movies.push(movie);
        }
      )});
  }

  getMovies() {
    return this.movies;
  }
}
