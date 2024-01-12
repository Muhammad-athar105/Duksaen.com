import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoteldataService } from 'src/app/core/services/hoteldata.service';
import { RoomManagementService } from 'src/app/core/services/room.service';
import { DialogformComponent } from '../hotel-details/dialogform/dialogform.component';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  myForm: FormGroup | any;

  hotelId: any;



  @Input() result: any;
  searchResult: any;
  hotels: any;
  rooms: any;
  formBuilder: any;



  handleSearchResult(result: any) {
    this.searchResult = result;
  }
  constructor(private route: ActivatedRoute, private api: ReviewsService, public dialog: MatDialog, private roomdataservice: RoomManagementService, http: HttpClient, private hoteldataservice: HoteldataService) { }

  ngOnInit(): void {
    // this.roomDetails();
    this.route.queryParams.subscribe(params => {
      this.hotelId = params['id'];
      this.hoteldataservice.gethotelID(this.hotelId).subscribe((data: any) => {
        this.hotels = data;
        this.rooms = data.rooms;
        console.log("Hotel =>", data)
      });
    });
  }
  onSubmit(): void {
    if (this.myForm.valid) {
      // Form is valid, perform the submission logic here
      const formValue = this.myForm.value;
      console.log('Form submitted with values:', formValue);

      // Optionally, you can make API calls, etc.
    } else {
      // Form is invalid, handle invalid form submission if needed
      console.log('Invalid form submission.');

    }
  }
  openDialog(roomId: any) {

    const dialogRef = this.dialog.open(DialogformComponent, {
      data: roomId // Pass the data to the dialog using the 'data' property
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  SubmitReview(data: any) {
    this.api.submitReview(this.hotelId, data).subscribe((result) => {
      console.warn(result)
    })
  }


}
