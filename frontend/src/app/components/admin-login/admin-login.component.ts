import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  formlogin = new FormGroup({
    email: new  FormControl(''),
    password:new FormControl('')
  })
  constructor(private auth: UserService, private rout: Router) { }
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.rout.navigate(['sadmin']);
    }


  }
  onSubmit(): void {
    if (this.formlogin.value) {
      this.auth.sadminlogin(this.formlogin.value).subscribe((result) => {
        this.rout.navigate(['sadmin'])
      }
      ),
        (err: Error) => {
          alert(err.message)
        }

    }

  }



}
