import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';
import { AdminDashComponent } from './components/Pannel-home/admin-dash.component';


import { AddRoomComponent } from './components/add-room/add-room.component';
import { SadminComponent } from './components/super-admin/Guestmanagement/sadmin.component';
import { ContactComponent } from './components/contact/contact.component';
import { UadminComponent } from './components/super-admin/profilemanagement/uadmin.component';
import { ReservationStatusComponent } from './components/reservation-status/reservation-status.component';
import { BookingstatusComponent } from './components/bookingstatus/bookingstatus.component';



const routes: Routes = [
  {
    path: '',
    component: AdminDashbordComponent,
    children: [
      { path: 'dash', component: AdminDashComponent },
      { path: 'BookingStatus', component: BookingstatusComponent },
      { path: 'addroom', component: AddRoomComponent },
      { path: 'uadmin', component: UadminComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'reservation', component: SadminComponent },


      { path: '', redirectTo: '/admin/dash', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
