import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sadmin',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class SadminComponent {
  ELEMENT_DATA: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private service:ReservationService ,

  ) { }
  ngOnInit(): void {
    // this.getrooms();
    this.getAllreservation();

  }
  displayedColumns: string[] = [
    // '_id',
    'roomName',
    'roomType',
    'action',
  ];
  dataSource = new MatTableDataSource<any>();

  // delete rooms
  getAllreservation() {

    this.service.getreservationID("").subscribe({
      next: (res: any) => {

        console.log(res)
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







}
