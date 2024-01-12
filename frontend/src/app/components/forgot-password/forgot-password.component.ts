import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountSettingService } from 'src/app/core/services/account-setting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup | any ;
  successMessage: any;
  errorMessage: any;




  constructor(private passwordService: AccountSettingService,
    private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.initForm();
  }
  private initForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      return;
    }

    const email = this.forgotPasswordForm.value.email;
    this.passwordService.forgotPassword(email).subscribe(
      response => {
        // Handle the response from the API if needed
        console.log(response);
      },
      error => {
        // Handle errors if needed
        console.error(error);
      }
    );
  }


}
