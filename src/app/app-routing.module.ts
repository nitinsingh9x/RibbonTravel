import { DetailPopupComponent } from './detail-popup/detail-popup.component';
import { ItenatoryConfirmationComponent } from './itenatory-confirmation/itenatory-confirmation.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { ShareCarPageComponent } from './share-car-page/share-car-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { TripPageComponent } from './trip-page/trip-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomePageComponent, pathMatch:'full'},
  {path:'trip', component:TripPageComponent},
  {path:'travel', component:TravelPageComponent},
  {path:'sharecar', component:ShareCarPageComponent},
  {path:'review', component:ReviewPageComponent},
  {path:'confirmation', component:ItenatoryConfirmationComponent},
  {path:'details', component:DetailPopupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
