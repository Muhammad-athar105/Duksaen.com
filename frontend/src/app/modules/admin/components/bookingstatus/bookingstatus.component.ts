import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/core/services/reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bookingstatus',
  templateUrl: './bookingstatus.component.html',
  styleUrls: ['./bookingstatus.component.css']
})
export class BookingstatusComponent {


  reservation: any;
  reservations: any = [];
  reservationData: any; // This will hold the fetched reservation data
  _id: any;


  constructor(private reservationService: ReservationService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._id = params['_id']; // Get the reservationId from the route parameter
      // this.fetchReservationData();
    });

    this.fetchAllReservations();
  }

  fetchAllReservations(): void {
    const hotelId = localStorage.getItem('hotelId');
    this.reservationService.getreservationID(hotelId).subscribe(
      (reservationsData) => {
        this.reservations = reservationsData;
      },
      (error) => {
        console.error('Error fetching reservations:', error);
      }
    );
  }
  approveReservation(_id: string): void {
    this.reservationService.approveReservation(_id).subscribe(
      () => {
        Swal.fire('', ' aproved reservation ', 'success')
        window.location.reload();
      },
      (error) => {
        Swal.fire('', ' error ', error)
      }
    );
  }
  rejectReservation(_id: string): void {
    this.reservationService.rejectReservation(_id).subscribe(
      () => {
        // Reservation rejected successfully, you can update the UI as needed.
        Swal.fire('', ' Rejected reservation ', 'warning')
        window.location.reload();

      },
      (error) => {
        console.error('Error rejecting reservation:', error);
      }
    );
  }

}
