import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country} from "../../models/country.model";
import {filter, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
  }

  countries$() {
    return this.http.get<Country[]>(environment.apiUrl + "/all")
      .pipe(
        map(countries => {
          return countries.map(country => {
            const currencies: any[] = [];

            Object.keys(country.currencies ?? {}).forEach(key => {
              currencies.push({
                shortcode: key,
                name: country.currencies[key].name,
                symbol: country.currencies[key].symbol,
              })
            })

            const modifiedCountry = {
              ...country,
              currencies: currencies
            };
            console.log(modifiedCountry);

            return modifiedCountry;
          });
        })
      );
  }

  search$(keyword: string) {
    return this.http.get<Country[]>(environment.apiUrl + "/all")
      .pipe(
        map(countries => {
          return countries.map(country => {
            const currencies: any[] = [];

            Object.keys(country.currencies ?? {}).forEach(key => {
              currencies.push({
                shortcode: key,
                name: country.currencies[key].name,
                symbol: country.currencies[key].symbol,
              })
            })

            const modifiedCountry = {
              ...country,
              currencies: currencies
            };
            console.log(modifiedCountry);

            return modifiedCountry;
          });
        }),
        map(countries => {
          return countries.filter(country => {
            return country.name.common.toLowerCase().includes(keyword.toLowerCase());
          })
        })
      );
  }

  country(name: string) {
    // získání dat podle názvu země
    return this.http.get<Country[]>(`${environment.apiUrl}/name/${name}`)
      .pipe(
        map(countries => {
          return countries.map(country => {
            const currencies: any[] = [];

            Object.keys(country.currencies ?? {}).forEach(key => {
              currencies.push({
                shortcode: key,
                name: country.currencies[key].name,
                symbol: country.currencies[key].symbol,
              })
            })

            const modifiedCountry = {
              ...country,
              currencies: currencies
            };
            console.log(modifiedCountry);

            return modifiedCountry;
          });
        }),
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
