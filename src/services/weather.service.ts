import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {

    private OpenWeatherApi: {
        baseUrl:string,
        appId:string
    };


    constructor(public http: Http) {

            this.OpenWeatherApi = {
                baseUrl: 'http://api.openweathermap.org/data/2.5/',
                appId: '511e6db17d58303c967ca52bf616f6bf'
            };

    }


    //get weather info by latitude and longitude
    public getWeather(lat:number, lon:number) {
        let url = this.OpenWeatherApi.baseUrl + 'weather';
        url += '?appId=' + this.OpenWeatherApi.appId;
        url += '&lat=' + lat.toString();
        url += '&lon=' + lon.toString();
        url += '&lang=' + 'es';
        url += '&units=metric';

        return this.http.get( url );
    }



    //get forecast weather (each 3 hours per 5 days) info by latitude and longitude
    public getForecastWeather(lat:number, lon:number) {
        let url = this.OpenWeatherApi.baseUrl + 'forecast';
        url += '?appId=' + this.OpenWeatherApi.appId;
        url += '&lat=' + lat.toString();
        url += '&lon=' + lon.toString();
        url += '&units=metric';

        return this.http.get( url );
    }
}