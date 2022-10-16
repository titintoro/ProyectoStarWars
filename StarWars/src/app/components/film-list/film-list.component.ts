import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CharactherInfoComponent } from 'src/app/diaglos/characther-info/characther-info.component';
import { FilmInfoComponent } from 'src/app/diaglos/film-info/film-info.component';
import { Film } from 'src/app/interfaces/film-interface';
import { FilmService } from 'src/app/services/films.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {
  listFilms: Film[] = [];
  numPages = 0;
  filmSelected: Film | undefined;

  constructor(private filmService: FilmService,  public dialog: MatDialog) {}

  ngOnInit(): void {
    this.mostrarListado(1);
  }

  //mostrara el listado indicandole la página que deseamos traernos los datos
  mostrarListado(page: number) {
    this.filmService.listFilmXpage(page).subscribe((res) => {
      this.listFilms = res.results;
      this.numPages = Math.ceil(res.count / 10);
    });
  }

  //muestra la imagen por el id del characther
  mostrarImagen(film: Film) {
    let id = film.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/films/${id}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }

  
  mostrarInfo(film: Film) {
    this.filmService.obtenerDetalles(film).subscribe((res) => {
      this.filmSelected = res;
      this.dialog.open(FilmInfoComponent, {
        data: {
          filmInfo: this.filmSelected
        },
      });
    });
  }
}
