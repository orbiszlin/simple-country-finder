import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country} from "../../models/country.model";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
  }

  countries$() {
    return this.http.get<Country[]>(environment.apiUrl + "/all");
  }

  country(name: string) {
    // získání dat podle názvu země
    return this.http.get<Country[]>(`${environment.apiUrl}/name/${name}`)
      .pipe(
        // napování, změna struktury na jinou strukturu
        map(countries => {
          if (countries.length === 0) {
            return null;
          }
          return countries[0];
        })
      );
  }
}
