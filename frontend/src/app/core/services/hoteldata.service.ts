import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HoteldataService {

  constructor(private http: HttpClient) { }

  getAllHotels() {
    return this.http.get(`http://localhost:3000/hotels/viewhotels`);
  }

  gethotelID(_id: any) {
    return this.http.get(`http://localhost:3000/hotels/hotel/${_id}`);
  }

  private apiUrls = 'http://localhost:3000/hotels/hotel/';
  getHotelDetails(hotelId: string): Observable<any> {
    const url = this.apiUrls + hotelId;
    return this.http.get<any>(url);
  }




  gethotel(search: string): Observable<any> {
    let url = 'http://localhost:3000/hotels/viewhotels';
    if (search) {
      if (url.indexOf('?') > -1) {
        url = `${url}&q = ${search}`
      }
      else {
        url = `${url}?q = ${search}`
      }

    }
    return this.http.get<any>('http://localhost:3000/hotels/viewhotels')
  }
}
