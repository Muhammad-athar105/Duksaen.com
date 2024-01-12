import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  formName: FormGroup | any;
  constructor(
    private auth: UserService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formName = this.formBuilder.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }
  //method to create user
  signup(data: object): void {
    console.log(data);
    return;
    this.auth.login(data).subscribe(
      (result) => {
        this.auth.setToken(result.data.accessToken);
        this.router.navigate(['admin']);
        window.location.reload();
        // this.loginForm.reset()
      },
      (err: Error) => {
        alert(err.message);
      }
    );
  }
}
