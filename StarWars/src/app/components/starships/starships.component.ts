import { Component, OnInit } from '@angular/core';
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

  constructor(private starshipsService: StarshipsService) { }

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

}
