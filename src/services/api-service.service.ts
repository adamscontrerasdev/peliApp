import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {
  private apiKey = 'bdf1fcf';
  private apiUrl = 'http://www.omdbapi.com';

  constructor(private http: HttpClient) { }


  searchMovies(query: string, page: number): Observable<any> {
    const url = `${this.apiUrl}/?apikey=${this.apiKey}&s=${query}&page=${page}`;
    console.log(url);
    
    return this.http.get(url);
  }

  searchYear(year: number, letra: string, page:number): Observable<any> {
    const url = `${this.apiUrl}/?apikey=${this.apiKey}&s=&y=${year}&s=&t=${letra}&s=&t=page=${page}`;
    console.log(url);
    return this.http.get(url);

    
  }
}
