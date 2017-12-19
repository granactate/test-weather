import { CapitalService } from './../../../services/capital.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'capitals-component',
  templateUrl: './capitals-component.component.html',
  styleUrls: ['./capitals-component.component.css']
})
export class CapitalsComponentComponent implements OnInit {

  private capitals: any
  private country: any;

  constructor(public capitalService: CapitalService) {
    this.country = null;
    if(window.localStorage.getItem("capitals")) {
      this.capitals = window.localStorage.getItem("capitals");
    }
    else {
      capitalService.getCapitals()
      .subscribe(capitals => {
        this.capitals = capitals.json();
      });
    }
  }


  public selectCountry(country: any) {
    this.capitalService.setCountry(country);
  }

  ngOnInit() {
  }

}
