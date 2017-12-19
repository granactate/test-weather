import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

    private OpenWeatherApi: {
        baseUrl:string,
        appId:string
    };

    private weatherTime: number;
    private weather: Observable<any>;


    constructor(public http: Http) {

            this.OpenWeatherApi = {
                baseUrl: 'http://api.openweathermap.org/data/2.5/',
                appId: '511e6db17d58303c967ca52bf616f6bf'
            };

            this.weatherTime = new Date().getTime();

    }


    //get weather info by latitude and longitude
    public getWeather(lat:number, lon:number) {
        var current_time = new Date().getTime();
        if(this.weather && (current_time <= this.weatherTime)) {
            return this.weather;
        }
        else {
            let url = this.OpenWeatherApi.baseUrl + 'weather';
            url += '?appId=' + this.OpenWeatherApi.appId;
            url += '&lat=' + lat.toString();
            url += '&lon=' + lon.toString();
            url += '&lang=' + 'es';
            url += '&units=metric';
            
            this.weatherTime = current_time;
            return this.weather = this.http.get( url );
        }
    }
}