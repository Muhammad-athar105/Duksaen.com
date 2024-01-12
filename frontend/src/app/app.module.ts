import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './components/login/login.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFondComponent } from './components/not-fond/not-fond.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchComponent } from './app/pages/home/search/search.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PasswordDialogComponent } from './components/password-dialog/password-dialog.component';


















@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    NotFondComponent,

    SignInComponent,
    SearchComponent,
    AdminLoginComponent,
    PasswordDialogComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class AppModule {}
