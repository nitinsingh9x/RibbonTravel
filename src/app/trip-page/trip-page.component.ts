import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.sass']
})
export class TripPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToTravelPage(){
    this
      .router
      .navigate(["/travel"]);
  }

}
