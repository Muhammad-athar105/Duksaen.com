import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchHotelService {

  constructor(private http: HttpClient) { }
  searchHotels(query: string) {
    return this.http.get('http://localhost:3001/api/hotels/search?q=${query}')
  }
}
