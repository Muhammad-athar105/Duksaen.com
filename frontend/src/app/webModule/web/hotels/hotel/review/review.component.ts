import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { ReviewsService } from 'src/app/core/services/reviews.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  ReviewForm: FormGroup | any
  id: any;
  constructor(private fb: FormBuilder, private apiReview: ReviewsService, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    this.ReviewForm = this.fb.group({
  
      rating: [''],
      name: [''],
      comment: ['']
    });

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
  }


  onSubmit(): void {

    if (this.ReviewForm.valid) {
      const formData = this.ReviewForm.value;
      formData.id = this.id;
      console.log(formData)
      this.apiReview.postData(formData, this.id).subscribe(
        (response) => {
          console.log(response);
          Swal.fire('Done', response.message, 'success')
          console.log('review posted  successfully!', response);

        },
        (error) => {
          console.error('Error posting data:', error);
          Swal.fire('Danger', 'Already Given the Review', 'question')

        }
      );
    }
  }




}

