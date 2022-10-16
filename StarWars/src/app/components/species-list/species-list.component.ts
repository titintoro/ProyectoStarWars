import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Specie } from 'src/app/interfaces/species-interface';
import { SpeciesService } from 'src/app/services/species.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css'],
})
export class SpeciesListComponent implements OnInit {
  constructor(
    private speciesService: SpeciesService,
    public dialog: MatDialog
  ) {}
  specieSelected: Specie | undefined;

  listSpecies: Specie[] = [];
  numPages = 0;

  ngOnInit(): void {
    this.mostrarListado(1);
  }

  //mostrara el listado indicandole la página que deseamos traernos los datos
  mostrarListado(page: number) {
    this.speciesService.listSpecieXpage(page).subscribe((res) => {
      this.listSpecies = res.results;
      this.numPages = Math.ceil(res.count / 10);
    });
  }

  //muestra la imagen por el id del characther
  mostrarImagen(species: Specie) {
    let id = species.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/species/${id}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }

  mostrarInfo(species: Specie) {
    this.speciesService.obtenerDetalles(species).subscribe((res) => {
      this.specieSelected = res;
      this.dialog.open(SpeciesListComponent, {
        data: {
          specieInfo: this.specieSelected,
        },
      });
    });
  }
}
