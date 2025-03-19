import {ResolveFn} from '@angular/router';
import {Country} from "../../models/country.model";
import {inject} from "@angular/core";
import {CountriesService} from "../../services/countries/countries.service";
import {firstValueFrom} from "rxjs";

export const countryDetailResolver: ResolveFn<Country | null> = async (route, state) => {
  // vložení závislosti - servisky skrze DI
  const countryService = inject(CountriesService)

  // načtení proměnné :name z URL parametru (v návaznosti na tabs.routes.ts)
  const countryName = route.paramMap.get('name')!;

  // získání dat z Observable > Promies > počkání na získání a vrácení dat do porměnné country
  // pokud existuje vracím objekt country
  return await firstValueFrom(countryService.country(countryName));
};
