export interface CountryInterface {
  name: {
    common: string
    official: string
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  population: number
  region: string
  subregion?: string
  capital: string[]
  currencies: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  languages?: {
    [key: string]: string
  }
  tld?: string[]
  borders?: string[]
  flags: {
    svg: string
  }
  cca3: string
}
