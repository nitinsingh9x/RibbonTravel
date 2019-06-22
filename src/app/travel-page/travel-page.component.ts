import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.scss']
})
export class TravelPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToSharingPage(){
    this
      .router
      .navigate(["/sharecar"]);
  }

  navigateToTripPage(){
    this
      .router
      .navigate(["/trip"]);
  }

}
