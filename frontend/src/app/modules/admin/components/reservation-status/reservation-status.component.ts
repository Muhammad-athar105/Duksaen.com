import { Component } from '@angular/core';
import { ReservationService } from 'src/app/core/services/reservation.service';
interface ReservationRequest {
  id: string;
  // Other properties...
}


@Component({
  selector: 'app-reservation-status',
  templateUrl: './reservation-status.component.html',
  styleUrls: ['./reservation-status.component.css']
})
export class ReservationStatusComponent {
  status: any;
  reservation: any;;


  constructor(private api: ReservationService) {

  }




  ngOnInit(): void {
    this.getreservationrequest("");
    const reservationId = '64c0bcc98d2708925569d0af'; // Replace this with the ID you want to fetch
    this.fetchReservation(reservationId);
  }
  getreservationrequest(search: String) {
    const hotelId = localStorage.getItem('hotelId')
    this.api.getreservationID(hotelId).subscribe((response: any) => {
      this.status = response.hotel
      // console.log('hhhotel', this.hotel)
    })
  }


  approveRequest(request: any) {
    // Handle the approval action here, e.g., send a request to the server, etc.
    console.log('Approved:', request);
  }

  rejectRequest(request: any) {
    // Handle the rejection action here, e.g., send a request to the server, etc.
    console.log('Rejected:', request);
  }

  fetchReservation(id: string): void {
    this.api.getreservationID(id).subscribe(
      (reservationData) => {
        this.reservation = reservationData;
      },
      (error) => {
        console.error('Error fetching reservation:', error);
      }
    );
  }




}



