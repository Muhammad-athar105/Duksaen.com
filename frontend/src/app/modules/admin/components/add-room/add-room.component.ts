import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/core/services/user.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { RoomManagementService } from 'src/app/core/services/room.service';
import Swal from 'sweetalert2';

export interface UserData {
  name: string;
  position: number;
  RoomType: number;
  RoomNo: string;
  Price: number;
  image: string;
  Beds: number;
  action: string;
}


@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private dialog: MatDialog,
    private service: RoomManagementService,

  ) { }
  ngOnInit(): void {
    // this.getrooms();
    this.getAllrooms();

  }
  displayedColumns: string[] = [
    // '_id',
    'roomName',
    'roomNumber',
    'roomType',
    'price',
    'description',
    'bedTypes',
    'amenities',
    'occupancy',
    'bookingPolicy',
    'action',
  ];
  dataSource = new MatTableDataSource<any>();

  // delete rooms
  getAllrooms() {

    const hotelId = localStorage.getItem('hotelId');
    this.service.getroomsbyHotelId(hotelId).subscribe({
      next: (res: any) => {
        // alert('Rooms deleted successfully ');
        // this.getrooms()
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: console.log,
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val === 'save') {
          this.getAllrooms();
        }
      },
    });
  }

  // delete rooms
  deleterooms(row: any) {

    this.service.delrooms(row).subscribe({
      next: (res) => {
        Swal.fire('Done', 'Deleted successfully ', 'success');
        this.getAllrooms();
      },
      error: console.log,
    });
  }

  // eddit dialog
  openEditform(row: any) {
    this.dialog
      .open(DialogComponent, {
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllrooms();
        }
      });
  }
}
