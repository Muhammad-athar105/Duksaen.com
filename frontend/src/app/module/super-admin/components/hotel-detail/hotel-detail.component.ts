import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/core/services/user.service';
import { SuperAdminService } from 'src/app/core/services/super-admin.service';
import Swal from 'sweetalert2';
export interface UserData {
  id: string;
  name: string;
  phone_no: string;
  hotelAddress: string;
  category: string;
  location: string;
}

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],

})
export class HotelDetailComponent {
  ELEMENT_DATA: any[] = [];
  isToggleDisabled = false;

  hotels: any;

  toggleButton() {
    this.isToggleDisabled = !this.isToggleDisabled;
  }

  displayedColumns: string[] = ['hotelName', 'hotelAddress', 'category',  'email', 'enabled' ,'approved',  'Enable/Disable' , 'Action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: UserService, private apiService: SuperAdminService) {
  }

  ngOnInit(): void {
    this.gethotels()

  }
  gethotels() {
    this.service.getHotels().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    });
  }


  enableUser(_id: any ) {
    this.apiService.enableHotelById(_id).subscribe(
      (response) => {
        Swal.fire('Done', 'enabled  successfully ', 'success');
        window.location.reload()
      },
      (error) => {
        console.error('Error enabling user:', error);

      }
    );
  }
  rejectHotel(row: any) {

    this.apiService.DeleteHotel(row).subscribe({
      next: (res) => {
        Swal.fire('Done', 'Deleted successfully ', 'success');
        // this.getAllrooms();
      },
      error: console.log,
    });
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}








