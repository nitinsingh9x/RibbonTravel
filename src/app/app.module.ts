import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterMenuComponent } from './core/footer-menu/footer-menu.component';
import { LayoutComponent } from './core/layout/layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { ShareCarPageComponent } from './share-car-page/share-car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterMenuComponent,
    LayoutComponent,
    HomePageComponent,
    TripPageComponent,
    TravelPageComponent,
    ShareCarPageComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
