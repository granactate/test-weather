import { Component, OnInit } from '@angular/core';
import { CapitalService } from '../../../services/capital.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(
    public capitalService: CapitalService,
    public router: Router) { }


  public showWeather() {
    if( this.capitalService.getCountry() ) {
      this.router.navigate(['weather']);
    }
  }

  ngOnInit() {
  }

}
