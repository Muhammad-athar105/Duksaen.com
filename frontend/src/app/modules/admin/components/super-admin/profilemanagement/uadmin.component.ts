import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AccountSettingService } from 'src/app/core/services/account-setting.service';
import { HoteldataService } from 'src/app/core/services/hoteldata.service';

import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';
declare const myfun: any
@Component({
  selector: 'app-uadmin',
  templateUrl: './uadmin.component.html',
  styleUrls: ['./profile.component.css'],
})
export class UadminComponent  implements OnInit {
  hotel_form: FormGroup | any
  authForm: FormGroup | any;

  detail: any;
  constructor(private fb: FormBuilder, private api: HoteldataService, private passwordServic:AccountSettingService) {
    this.createForm();

  }
  createForm() {
    this.authForm = this.fb.group({
      oldpassword: [''],
      newpassword: [''],
      Repassword: [''],


    });
  }

  onChangePassword() {

    if (this.authForm.valid) {
      let hotel = this.authForm.value;
      hotel.hotelId = localStorage.getItem('hotelId');
      this.passwordServic.changePassword(hotel).subscribe({
        next: (val: any) => {
          Swal.fire('success' ,'password Change Successfully ' ,'success')

        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
  ngOnInit(): void {
    this.get("");
   this.hotel_form = this.fb.group({
     fullName: [''],
     hotel_name: [''],
     country: [''],
     address: [''],
     phone: [''],
     email: [''],
   });
  }
  submit() {
    if (this.hotel_form.valid) {
      console.log(this.hotel_form.value)
     }
  }
  get(search: String) {
    const hotelId = localStorage.getItem('hotelId')
    this.api.gethotelID(hotelId).subscribe((response: any) => {
      this.detail = response.hotel
      // console.log('hhhotel', this.hotel)
    })
  }


}

