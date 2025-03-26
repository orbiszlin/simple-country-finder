interface CountryName {
  common: string;
  official: string;
}

interface CountryFlags {
  png: string;
  svg: string;
}

export interface Country {
  area: number;
  capital: string[];
  cca2: string;
  cca3: string;
  ccn3: string;
  flag: string;
  currencies: any;
  flags: CountryFlags;
  latlng: [number,number];
  name: CountryName;


}
