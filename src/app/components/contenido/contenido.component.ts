import { Component, HostListener, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';
import { HeaderComponent } from '../header/header.component';

interface MovieInfo {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {
  movies: any[] = [];
  movieFull: any[] = [];


  constructor(private peliService: ApiServiceService) { }

  @HostListener('window:input')
  searchMovies() {
    this.peliService.searchMovies(this.peliService.getPagina()).subscribe(data => {
      if (data && data.Search) {
        this.movies = data.Search;
        this.ordenarPorAño();
      }
    });
  }

  ngAfterViewInit(): void {
    this.searchMovies()
    const botonNext = document.querySelectorAll(".botonPasar")


    if (botonNext) {
      botonNext.forEach(element => {
        element.addEventListener('click', () => {
          this.searchMovies();
        })
      });
    }
  }

  buscarId(id: string) {
    this.peliService.todaLainfoPorId(id).subscribe((data: any) => {
      if (data) {
        this.movieFull.push(data);
        console.log(this.movieFull);
      }
    });
  }

  salir() {
    this.movieFull = [];
  }

  ordenarPorAño(){
    this.movies.sort((a, b) =>  b.Year - a.Year)
  }
}

