import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { HotelComponent } from './hotel/hotel.component';


import { ReserveComponent } from './hotel-details/reserve/reserve.component';


const routes: Routes = [
  {
    path: '', component:ContainerComponent, children: [
      { path: 'header', component: HeaderComponent },
      { path: 'hotelcontent', component: HotelComponent },
     
      { path: 'reserve', component: ReserveComponent },





    ]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
