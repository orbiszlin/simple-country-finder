import { ResolveFn } from '@angular/router';
import {Country} from "../../models/country.model";

export const countryDetailResolver: ResolveFn<Country> = (route, state) => {
  return {
    name: {
      common: "Country Detail xxx",
    }
  } as any;
};
