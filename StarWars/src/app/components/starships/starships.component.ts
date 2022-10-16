import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StarshipsInfoComponent } from 'src/app/diaglos/starships-info/starships-info.component';
import { Starships } from 'src/app/interfaces/starships.interface';
import { StarshipsService } from 'src/app/services/starships.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  listStarships: Starships[] = [];
  numPages=0
  starshipsSelected: Starships | undefined;

  constructor(private starshipsService: StarshipsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.mostrarListadoStarships(1);
  }

  mostrarListadoStarships(page:number){
    this.starshipsService.listStarshipsXPage(page).subscribe((res) => {
      this.listStarships = res.results;
      this.numPages = Math.ceil(res.count/10);
    })
  };

  mostrarImagenStarship(starships:Starships){
    let idStarships = starships.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/starships/${idStarships}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }

  mostrarInfo(starships:Starships) {
    this.starshipsService.obtenerDetalles(starships).subscribe((res) => {
      this.starshipsSelected = res;
      this.dialog.open(StarshipsInfoComponent, {
        data: {
          starshipInfo: this.starshipsSelected
        },
      });
    });
  }

}
