import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Country} from "../../models/country.model";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) {
  }

  countries$() {
    return this.http.get<Country[]>(environment.apiUrl+"/all");
  }

  country(name: string) {
    return this.http.get(`${environment.apiUrl}/${name}`);
  }
}
