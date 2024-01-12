import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface ReservationRequest {
  id: string;
  name: string;
  date: Date;
  details: string;
}


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/reservation';

  rejectReservation(id: string): Observable<any> {
    const url = `${this.baseUrl}/reject/${id}`;
    return this.http.put(url, null);
  }
  private apiUrl = 'http://localhost:3000/reservation';
  approveReservation(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/approve/${id}`, null);
  }

  cancelRes(_id: any) {
    return this.http.get(`http://localhost:3000/reservation/reject/${_id}`);
  }


  getreservationID(_id: any) {
    return this.http.get<any>(`http://localhost:3000/reservation/view/${_id}`);
  }
  private aiUrl = 'http://localhost:3000';
  getAllReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/view`);
  }

}
