import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class RoomManagementService {
  // private baseUrl = 'http://localhost:3001/users';
  constructor(private http: HttpClient) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }),
  };
  //  form adding rooms
  addrooms(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/rooms/addRoom', data, this.httpOptions);
  }
  // getting room
  getRoom() {
    return this.http.get('http://localhost:3000/rooms/hotelRooms', this.httpOptions);
  }

  delrooms(_id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/rooms/delete/${_id}`, this.httpOptions);
  }

  // getroomsbyId(_id: any): Observable<any> {
  //   return this.http.get(`http://localhost:3000/rooms/view/${_id}`, this.httpOptions);
  // }
  getroomsbyHotelId(_id: any): Observable<any> {
    return this.http.get(`http://localhost:3000/rooms/view/${_id}`, this.httpOptions);
  }

  updateroom(data: any, _id: number) {
    return this.http.put<any>("http://localhost:3000/rooms/update/"+_id, data, this.httpOptions);
  }
  // private apiUr = 'http://localhost:3000';


  // updateroom(roomId: string, updatedData: any) {
  //   const url = `${this.apiUr}/rooms/update/${roomId}`;
  //   return this.http.put(url, updatedData,this.httpOptions);
  // }

  // /reservation system of rooom
  private apiUrl = 'http://localhost:3000/reservation';
  reserveRoom(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reserveRoom`, data);
  }
  private baseUrl = 'http://localhost:3000/rooms/view';

  getRoomById(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
