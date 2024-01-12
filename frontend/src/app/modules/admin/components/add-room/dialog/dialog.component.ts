import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RoomManagementService } from 'src/app/core/services/room.service';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  roomForm: FormGroup | any;
  actionbtn: string = 'save';
  fileType: any;
  fileName: any;
  selectedFile: File | any = null;
  roomTypes = [
    { value: 'standard', viewValue: 'Standard' },
    { value: 'deluxe', viewValue: 'Deluxe' },
    { value: 'suite', viewValue: 'Suite' },
  ];

  dialogRef: any;
  formBuilder: any;

  constructor(
    private fb: FormBuilder,
    private service: RoomManagementService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,

    private dialog: MatDialogRef<DialogComponent>
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    if (this.editdata) {
      this.actionbtn = 'Update';
      this.roomForm.controls['occupancy'].setValue(this.editdata.occupancy);
      this.roomForm.controls['roomNumber'].setValue(this.editdata.roomNumber);
      this.roomForm.controls['roomType'].setValue(this.editdata.roomType);
      this.roomForm.controls['description'].setValue(this.editdata.description);
      this.roomForm.controls['price'].setValue(this.editdata.price);
      this.roomForm.controls['roomPictures'].setValue(this.editdata.pictures);
      this.roomForm.controls['roomView'].setValue(this.editdata.roomView);
      this.roomForm.controls['amenities'].setValue(this.editdata.amenities);
      this.roomForm.controls['bookingPolicy'].setValue(this.editdata.bookingPolicy);
      this.roomForm.controls['roomAvailability'].setValue(this.editdata.roomAvailability);
    }
  }

  createForm() {
    this.roomForm = this.fb.group({
      hotelId: [localStorage.getItem('hotelId')],
      roomType: ['', Validators.required],
      roomNumber: ['', Validators.required],
      occupancy: ['', Validators.required],
      bedTypes: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      roomView: ['', Validators.required],
      amenities: ['', Validators.required],
      bookingPolicy: ['', Validators.required],
      roomPictures: [''],
      roomAvailability: [true],
      checkIn: [''],
      checkOut: [''],
      // roomPictures: ['']
    });
  }

  onFileSelected(inputElement: HTMLInputElement) {
    if (inputElement.files && inputElement.files.length > 0) {
      const file: File = inputElement.files[0];
      this.selectedFile = file;
      console.log('Selected file => ', this.selectedFile)
    }
  }


  onFormsubmit() {
    if (!this.editdata) {
      if (this.roomForm.valid) {

        const formData = new FormData();

        // Append form field values to the formData
        formData.append('roomType', this.roomForm.get('roomType').value);
        formData.append('roomNumber', this.roomForm.get('roomNumber').value);
        formData.append('occupancy', this.roomForm.get('occupancy').value);
        formData.append('bedTypes', this.roomForm.get('bedTypes').value);
        formData.append('description', this.roomForm.get('description').value);
        formData.append('price', this.roomForm.get('price').value);
        formData.append('roomView', this.roomForm.get('roomView').value);
        formData.append('amenities', this.roomForm.get('amenities').value);
        formData.append('bookingPolicy', this.roomForm.get('bookingPolicy').value);
        formData.append('roomAvailability', this.roomForm.get('roomAvailability').value);
        formData.append('checkIn', this.roomForm.get('checkIn').value);
        formData.append('checkOut', this.roomForm.get('checkOut').value);
        formData.append('hotelId', this.roomForm.get('hotelId').value);
        let roomPic = this.selectedFile;

        // Append the selected file to the formData
        formData.append('roomPictures', this.selectedFile);
        formData.append('file', this.roomForm.get('roomPictures').value);


        this.service.addrooms(formData).subscribe({
          next: (val: any) => {
            Swal.fire('Done', 'Room Added Successfully ', 'success');
            this.dialog.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    } else {
      this.update();
    }
  }
  FormData(FormData: any) {
    throw new Error('Method not implemented.');
  }
  update() {
    const hotelId = localStorage.getItem('hotelId');
    console.log('--------------------' ,hotelId)
    this.service.updateroom(this.roomForm.value, this.editdata._id).subscribe({
      next: (res) => {
        Swal.fire('Updated', ' updated successfully ', 'success')
        //  this.dialog.close(true);
        // this.roomForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        Swal.fire('Error', 'error occured while updating room', 'error')
      }
    })
  }
  // showConfirmation() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: 'You will not be able to recover this data!',
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       // User confirmed, handle the deletion or any other action here
  //       Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire('Cancelled', 'Your data is safe :)', 'error');
  //     }
  //   });
  // }
}




