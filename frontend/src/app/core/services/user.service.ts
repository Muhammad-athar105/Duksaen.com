import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Data, Router } from '@angular/router';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  isUserlogin = new BehaviorSubject<boolean>(false);

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }

  login(user: any): Observable<any> {
    return this.http
      .post(
        `http://localhost:3000/hotels/login`,
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // creating a funtion to call an API's
  userSignup(data: any) {

    return this.http
      .post(`http://localhost:3000/hotels/create`, data, {
        observe: 'response',
      })
      .pipe(retry(1), catchError(this.handleError));
  }

  // create a funtion to call get Api
  gethotles(){
    return this.http.get<any>('http://localhost:3000/reservation/view/')
  }
  viewAllhotels() {
    return this.http.get<any>('localhost:3000/hotels/viewhotels')

  }
  private apUrl = 'http://localhost:3000/hotels/viewhotels';



  getHotels(): Observable<any> {
    return this.http.get<any>(this.apUrl);
  }


  // for super admin login

  sadminlogin({ email, password }: any): Observable<any> {
    if (email === 'admin@gmail.com' && password === '123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Hani ', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
  sadminlogout() {
    localStorage.removeItem('token');
    this.router.navigate(['home']);
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

  private apiUrl = 'http://localhost:3000/hotels/viewhotels';


  getAllHotels(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  private aUrl = 'http://localhost:3000/contact/create';



  createContact(contactData: any ) {
    return this.http.post<any>(this.aUrl, contactData);
  }
}
