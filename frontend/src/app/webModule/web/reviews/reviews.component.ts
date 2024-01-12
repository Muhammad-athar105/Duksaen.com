import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from 'src/app/core/services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  id: string | any;
  rating: number | any;
  description: string | any;

  constructor(private http: HttpClient, private route: ActivatedRoute,
    private reviewService: ReviewsService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
  submitReview(): void {
    console.log(this.rating);
    const reviewData = {
      rating: this.rating,
      description: this.description
    };

    this.reviewService.submitReview(this.id, reviewData).subscribe(
      () => {
        console.log('Review submitted successfully.');
        // Optionally, you can redirect to a different page or show a success message.
      },
      (error) => {
        console.error('Error submitting review:', error);
      }
    );
  }


}


