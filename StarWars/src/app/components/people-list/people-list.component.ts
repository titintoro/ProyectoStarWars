import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people-interface';
import { PeopleService } from 'src/app/services/people.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  listPeople: People[] = [];
  numPages = 0;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.mostrarListado(1);
  }

  //mostrara el listado indicandole la página que deseamos traernos los datos
  mostrarListado(page: number) {
    this.peopleService.listPeopleXpage(page).subscribe((res) => {
      this.listPeople = res.results;
      this.numPages = Math.ceil(res.count / 10);
    });
  }

  //muestra la imagen por el id del characther
  mostrarImagen(people: People) {
    let id = people.url.split('/')[5];
    return `${environment.apiUrlBaseImg}/characters/${id}.jpg`;
  }

  counter() {
    return new Array(this.numPages);
  }
}
