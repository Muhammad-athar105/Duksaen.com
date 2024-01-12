import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }


  giveReviews(_id: any) {
    return this.http.get(`http://localhost:3000/review/reviews/${_id}`);
  }


  getAllReviews() {
    return this.http.get<any[]>(this.Url);
  }
  private Url = 'http://localhost:3000/review/viewAll/reviews';
  getreviews(hotelId: string): Observable<any> {
    const url = this.Url + hotelId;
    return this.http.get<any>(url);
  }
  // private apiUrl = 'http://localhost:3000/review/';
  // submitReview(id: string, reviewData: any): Observable<any> {
  //   return this.http.post(`${this.apiUrl}${id}/reviews`, reviewData);
  // }
  private piUrl = 'http://localhost:3000/review/viewAll/reviews';

  getReviews(): Observable<any> {
    return this.http.get(this.piUrl);
  }
  private iUrl = 'http://localhost:3000/review/';


  submitReview(hotleId: string, reviewData: any): Observable<any> {
    console.log("GGGGGGGGGGGG", hotleId)
    return this.http.post(`${this.iUrl}${hotleId}/reviews`, reviewData);
  }


  private apiUrl = 'http://localhost:3000'; // Update the base API URL


  postData(data: any, hotleId: any): Observable<any> {
    // const url = `${this.apiUrl}/review/${id}/reviews`; // Updated URL without :ID
    // console.log(url)
    return this.http.post(`http://localhost:3000/review/${hotleId}/reviews`, data);
  }


  getReviewById(reviewId: string): Observable<any> {
    const url = `${this.apiUrl}/review/reviewById/${reviewId}`;
    return this.http.get(url);
  }



}
