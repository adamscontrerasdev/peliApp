import { Component } from '@angular/core';
import { ContenidoComponent } from '../contenido/contenido.component';
import { ApiServiceService } from 'src/services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'paginado',
  templateUrl: './paginado.component.html',
  styleUrls: ['./paginado.component.css']
})
export class PaginadoComponent {
  constructor(private service: ApiServiceService) { }
  pagina: number = 1;
  next() {
    this.service.nextPage();
    this.pagina = this.service.getPagina();
    localStorage.setItem('page', JSON.stringify(this.pagina));
  }
  prev() {
    this.service.previousPage();
    this.pagina = this.service.getPagina();
    localStorage.setItem('page', JSON.stringify(this.pagina));
  }
}
