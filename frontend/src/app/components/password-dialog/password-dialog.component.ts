import { Component } from '@angular/core';
import { AccountSettingService } from 'src/app/core/services/account-setting.service';

@Component({
  selector: 'app-password-dialog',
  templateUrl: './password-dialog.component.html',
  styleUrls: ['./password-dialog.component.css']
})
export class PasswordDialogComponent {

  email: any ;
  successMessage: any ;
  errorMessage: any ;

  constructor(private passwordService: AccountSettingService) { }

  onSubmit() {
    this.passwordService.forgotPassword(this.email).subscribe(
      (response) => {
        this.successMessage = response.message;
        this.errorMessage = null;
      },
      (error) => {
        this.errorMessage = error.error.message || 'Something went wrong.';
        this.successMessage = null;
      }
    );
  }

}
