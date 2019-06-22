import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-car-page',
  templateUrl: './share-car-page.component.html',
  styleUrls: ['./share-car-page.component.sass']
})
export class ShareCarPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNextPage(){
    this
      .router
      .navigate(["/sharecar"]);
  }

}
