import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ApiServiceService } from 'src/services/api-service.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private service: ApiServiceService) { }
  @Input() placeholder!: String;
  @Output() movieSelected = new EventEmitter<String>()
  name: string = "";

  @HostListener('input')
  selectMovie() {
    this.movieSelected.emit(this.name);
    localStorage.setItem('busqueda', JSON.stringify(this.name));
    this.service.setBusqueda(this.name);
    this.service.searchMovies(this.service.getPagina());
  }

  enviar() {

  }
} 
