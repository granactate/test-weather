import { WeatherService } from './../services/weather.service';
import { CapitalService } from './../services/capital.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { CapitalsComponentComponent } from './components/capitals-component/capitals-component.component';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CapitalsComponentComponent,
    WeatherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA69Nj4Ft-xEtyvYr_StN-ANNwyI8sRaGw'
    }),
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    CapitalService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
