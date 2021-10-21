export interface CountryInterface {
  name: {
    common: string;
    official: string;
    nativeName?: {};
  };
  population: number;
  region: string;
  subregion: string;
  capital: [];
  currencies: {};
  languages: {};
  tld: [];
  borders: [];
  flags: {
    svg: string;
  };
  cca3: string;
}
