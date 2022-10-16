import { Film } from './film-interface';
import { People } from './people-interface';
import { Planets } from './planets.interface';
import { Specie } from './species-interface';
import { Starships } from './starships.interface';
import { Vehicles } from './vehicles.interface';

export interface DialogData {
  peopleInfo: People;
  filmInfo: Film;
  specieInfo : Specie;
  planetInfo: Planets;
  vehicleInfo: Vehicles;
  starshipInfo: Starships;

}
