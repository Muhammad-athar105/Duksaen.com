import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelComponent } from './hotel/hotel.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';







import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ReserveComponent } from './hotel-details/reserve/reserve.component';
import { DialogformComponent } from './hotel-details/dialogform/dialogform.component';
import { ReviewComponent } from './hotel/review/review.component';















@NgModule({
  declarations: [
    HotelComponent,
    HeaderComponent,
    ContainerComponent,

    ReserveComponent,
    DialogformComponent,
    ReviewComponent,




  ],
  imports: [

    CommonModule,
    HotelsRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule




  ]
})
export class HotelsModule { }
