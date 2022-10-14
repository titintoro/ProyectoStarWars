import { Component, OnInit } from '@angular/core';
import { Planets } from 'src/app/interfaces/planets.interface';
import { PlanetsService } from 'src/app/services/planets.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  listPlanets: Planets[] = [];
  numPages=0

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.mostrarListadoPlanets(1);
  }

  mostrarListadoPlanets(page:number){
    this.planetsService.listPlanetsXPage(page).subscribe((res) => {
      this.listPlanets = res.results;
      this.numPages = Math.ceil(res.count/10);
    })
  };

  mostrarImagenPlanets(planets:Planets){
    let idPlanet = planets.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/planets/${idPlanet}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }
}
