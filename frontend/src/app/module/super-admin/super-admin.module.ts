import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './components/module/super-admin/components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfilemanagementComponent } from './components/profilemanagement/profilemanagement.component';



@NgModule({
  declarations: [
    NavbarComponent,

    SidebarComponent,
    TopbarComponent,
    HeaderComponent,
    HomeComponent,
    HotelDetailComponent,
    ProfilemanagementComponent,

  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatSlideToggleModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,


    MatFormFieldModule,
    MatInputModule,
    MatSortModule

  ]
})
export class SuperAdminModule { }
