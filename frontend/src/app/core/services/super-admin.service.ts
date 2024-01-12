import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  private apiUrl = 'http://localhost:3000/superAdmin';

  constructor(private http: HttpClient) { }

  // enableUser(_id:  any ) {
  //   const url = `${this.apiUrl}/enable/${_id}`;
  //   return this.http.put(url);
  // }

  // enableUser(_id: any): Observable<any> {
  //   return this.http.get(`http://localhost:3000/superAdmin/enable/${_id}`);
  // }
  private aUrl = 'http://localhost:3000/superAdmin/enable';
  enableHotelById(id: string) {
    const url = `${this.aUrl}/${id}`;
    return this.http.put(url, {});
  }
  EnableHotel(_id: any) {
    return this.http.get(`http://localhost:3000/superAdmin/enable${_id}`);
  }
  private aiUrl = 'http://localhost:3000/superAdmin/enable/';


  enableEvent(): Observable<any> {
    return this.http.post(this.aiUrl, null);
  }


  DeleteHotel(_id: any): Observable<any> {
    return this.http.delete(`http://localhost:3000/superAdmin/approve/reject/${_id}`);
  }
}
