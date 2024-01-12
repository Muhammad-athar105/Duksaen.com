import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http: HttpClient) { }

  searchHotel(searchText: string): Observable<any> {

    const endpoint = `http://localhost:3000/filter/search`;
    const params = { searchText: searchText };

    return this.http.get(endpoint, { params });
  }

  filterHotel(searchText: string): Observable<any> {

    const endpoint = `http://localhost:3000/filter/search`;
    const params = { hotelAddress: searchText };
    const param = { checkIn: searchText };

    return this.http.get(endpoint, { params });
  }
}
