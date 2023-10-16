import { AfterViewInit, Component } from '@angular/core';
import { ApiServiceService } from "./../services/api-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  query: string = 'batman';
  page: number = 1;
  movies: any[] = [];
  constructor(private peliService: ApiServiceService) { }

  searchMovies() {
    this.peliService.searchMovies(this.query, this.page).subscribe(data => {
      if (data && data.Search) {
        this.movies = data.Search;
        console.log(this.movies);
      }
    });
  }

  nextPage() {
    this.page++;
    this.searchMovies();
  }

  previousPage() {
    if (this.page > 1) {
      this.page--;
      this.searchMovies();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.searchMovies());
  }
}
