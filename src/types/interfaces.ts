export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName?: {};
  };
  population: number;
  region: string;
  subregion?: string;
  capital: string[];
  currencies?: {};
  languages?: {};
  tld?: string[];
  borders?: string[];
  flags: {
    svg: string;
  };
  cca3: string;
}
