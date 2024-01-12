import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashbordComponent } from './components/admin-dashbord/admin-dashbord.component';


import { TopbarComponent } from './components/topbar/topbar.component';

import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminDashComponent } from './components/Pannel-home/admin-dash.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AddRoomComponent } from './components/add-room/add-room.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './components/add-room/dialog/dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { SadminComponent } from './components/super-admin/Guestmanagement/sadmin.component';
import { UadminComponent } from './components/super-admin/profilemanagement/uadmin.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReservationStatusComponent } from './components/reservation-status/reservation-status.component';
import { BookingstatusComponent } from './components/bookingstatus/bookingstatus.component';








@NgModule({
  declarations: [
    AdminDashbordComponent,
    TopbarComponent,
    FooterComponent,
    NavComponent,
    AdminDashComponent,

    AddRoomComponent,
    DialogComponent,
    SadminComponent,
    UadminComponent,
    ContactComponent,
    ReservationStatusComponent,
    BookingstatusComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule

  ],
})
export class AdminModule { }
