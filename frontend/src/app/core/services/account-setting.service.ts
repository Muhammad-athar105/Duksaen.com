import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {

  private apiUrl = 'http://localhost:3000/password/change-password';

  constructor(private http: HttpClient) { }

  changePassword(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  private Url = 'http://localhost:3000';

  forgotPassword(email: string): Observable<any> {
    const url = `${this.Url}/password/forgot-password`;
    return this.http.post(url, { email });
  }



}
