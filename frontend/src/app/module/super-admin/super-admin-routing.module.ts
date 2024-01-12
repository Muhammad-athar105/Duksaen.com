import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { ProfilemanagementComponent } from './components/profilemanagement/profilemanagement.component';

const routes: Routes = [
  {
    path: '', component: TopbarComponent,
    children: [
      { path: 'nav', component: NavbarComponent },
      { path: 'homes', component: HomeComponent },
      // { path: '**', component: HomeComponent },
      { path: 'hoteldetail', component: HotelDetailComponent },
      { path: 'profile', component: ProfilemanagementComponent },
      { path: '', redirectTo: '/sadmin/homes', pathMatch: 'full' },



  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
