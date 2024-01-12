import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoomManagementService } from 'src/app/core/services/room.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.css']
})
export class DialogformComponent {
  reservationForm!: FormGroup;
  dialog: any;
  isSubmitting: boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private service: RoomManagementService) { }

  ngOnInit() {
    const hotelId = localStorage.getItem('hotelId');
    this.reservationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      nationality: ['', Validators.required],
      checkIn: ['', Validators.required],
      checkOut: ['', Validators.required],
      noOfPerson: ['', Validators.required],
      roomId: [this.data],
      hotelId: [hotelId],
      // bookingStatus: ['', Validators.required],
      arrivalTime: ['']
    });
  }

  submitReservationForm() {
    // console.log(this.reservationForm.value);
    if (this.reservationForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      this.service.reserveRoom(this.reservationForm.value).subscribe((response: any) => {
        Swal.fire('Done', response.message, 'success')
        this.isSubmitting = false;

        this.reservationForm.reset()
        this.dialog.close()


      }),
        (error: any) => {
          console.error(error);
          Swal.fire('Error', 'Failed to make a reservation', 'error');
          this.isSubmitting = false; // Re-enable the submit button on error as well
        }


    }
  }

}
