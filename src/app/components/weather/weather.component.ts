import { fadeBottom } from './../../animations/fadeBottom';
import { WeatherService } from './../../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../../services/capital.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations: [
    fadeBottom
  ]
})
export class WeatherComponent implements OnInit {

  private country: any;
  private weather: any;
  constructor(
    public capitalsService: CapitalService,
    public weatherService: WeatherService) { 

    this.country = capitalsService.getCountry();
    if( this.country.latlng ) {
      var latitude = this.country.latlng[0];
      var longitude = this.country.latlng[1];
      weatherService.getWeather(latitude, longitude)
      .subscribe(weather => {
        this.weather = weather.json();
        console.log(this.weather);
      });
    }
    
  }

  ngOnInit() {
    console.log(this.capitalsService.getCountry());
  }

}
