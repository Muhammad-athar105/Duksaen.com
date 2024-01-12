import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private auth: UserService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: [''],
    });
  }


  openDialog() {
    this.dialog.open(ForgotPasswordComponent);
  }
  login() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          this.auth.setToken(result.data.accessToken);
          localStorage.setItem('hotelId', result.data._id)
          // localStorage.setItem('roomId', result.data._id);
          console.log(result)

          this.router.navigate(['admin']);
          window.location.reload();
          // this.loginForm.reset()
        },
        (err: Error) => {
          Swal.fire('alert' , 'Enter Valid Email and password ' , 'question')

        }
      );
    }


  }
}
