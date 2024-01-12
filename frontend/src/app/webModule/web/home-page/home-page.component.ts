import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HoteldataService } from 'src/app/core/services/hoteldata.service';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import { UserService } from 'src/app/core/services/user.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  hotel: any = []
  hotels: any[] | any;
  reviews: any;
  contactForm: FormGroup | any;

  allHotels: any = [];

  constructor(private api: HoteldataService, private formBuilder: FormBuilder, private contactapi: UserService, private ReviewService: ReviewsService,) { }


  ngOnInit(): void {

    this.get("");

    this.getReviews();



    this.api.getAllHotels().subscribe((result) => {
      this.allHotels = result;
      console.log('all hotels', this.allHotels);
    });
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {

    this.contactapi.createContact(this.contactForm.value).subscribe(
      response => {
        console.log('Contact created successfully!', response);
        Swal.fire('Done', response.message , 'success')
        this.contactForm.reset();

      },
      error => {
        console.error('Error creating contact:', error);
        Swal.fire('warning','Already Submited Resonse By this Email' ,'warning')
        this.contactForm.reset();

      }
    );






  }



  get(search: String) {
    const hotelId = localStorage.getItem('hotelId')
    this.api.gethotelID(hotelId).subscribe((response: any) => {
      this.hotel = response.hotel
      // console.log('hhhotel', this.hotel)
    })
  }
  getReviews(): void {
    this.ReviewService.getReviews().subscribe(
      (data) => {
        this.reviews = data;
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }



}


