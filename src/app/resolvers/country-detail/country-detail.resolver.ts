import {ResolveFn} from '@angular/router';
import {Country} from "../../models/country.model";
import {inject} from "@angular/core";
import {CountriesService} from "../../services/countries/countries.service";
import {firstValueFrom} from "rxjs";

export const countryDetailResolver: ResolveFn<Country> = async (route, state) => {
  // vložení závislosti - servisky skrze DI
  const countryService = inject(CountriesService)

  // načtení proměnné :name z URL parametru (v návaznosti na tabs.routes.ts)
  const countryName = route.paramMap.get('name')!;

  // získání dat z Observable > Promies > počkání na získání a vrácení dat do porměnné country
  const country = await firstValueFrom(countryService.country(countryName))

  // kontrola jestli country vůbec existuje, jestli ne je třeba přesměrovat uživatele jinam
  if (country === null) {
    // TODO: toto je třeba opravit
    //  je třeba zastavit načítání stránky, a vrátit uživatele zpět, protože nemůžu jít na stránku
    //  která neexistuje
    return {} as any
  }

  // pokud existuje vracím objekt country
  return country;
};
