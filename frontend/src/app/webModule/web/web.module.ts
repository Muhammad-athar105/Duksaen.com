import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { RenderComponent } from './render/render.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FiltersComponent } from './filters/filters.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ContainerComponent } from './hotels/container/container.component';



import { FormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search/search.component';


import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RegisterFormDialogComponent } from './register-form-dialog/register-form-dialog.component';






@NgModule({
  declarations: [
    RenderComponent,
    HomePageComponent,
    NavBarComponent,
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    FiltersComponent,
    SearchComponent,
    RegisterFormDialogComponent,
  




  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,

    MatDialogModule



  ]
})
export class WebModule { }
