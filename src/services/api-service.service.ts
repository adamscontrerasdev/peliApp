import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {
  private apiKey = 'bdf1fcf';
  private apiUrl = 'http://www.omdbapi.com';
  private pagina = 1;
  private query: string = "marvel";

  constructor(private http: HttpClient) { }


  searchMovies(page: number, query: string = this.query): Observable<any> {
    const url = `${this.apiUrl}/?apikey=${this.apiKey}&s=${query}&page=${page}&plot=full`;
    console.log(url);
    return this.http.get(url);
  }

  searchYear(year: number, letra: string, page: number): Observable<any> {
    const url = `${this.apiUrl}/?apikey=${this.apiKey}&s=&y=${year}&s=&t=${letra}&s=&t=page=${page}`;
    console.log(url);
    return this.http.get(url);
  }
  nextPage() {
    this.pagina++;
    console.log(this.pagina);
  }
  previousPage() {
    if (this.pagina > 1) {
      this.pagina--;
      console.log(this.pagina);
    }
  }
  setBusqueda(termino: string) {
    this.query = termino;
  }

  getPagina() {
    return this.pagina;
  }

  todaLainfoPorId(id:string){
    const url = `${this.apiUrl}/?apikey=${this.apiKey}&i=${id}&plot=full`;
    console.log(url);
    return this.http.get(url);
  }
}
