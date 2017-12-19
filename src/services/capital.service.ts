import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CapitalService {

  private selectedCountry:any;
  constructor(public http: Http) { }


  public getCapitals() {
    var url = "https://restcountries.eu/rest/v2/regionalbloc/usan";
    return this.http.get( url );
  }

  public setCountry(country: any) {
    this.selectedCountry = country;
  }

  public getCountry() {
    return this.selectedCountry;
  }

}
