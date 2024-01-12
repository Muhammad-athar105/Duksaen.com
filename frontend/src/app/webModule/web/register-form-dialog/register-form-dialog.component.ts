import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form-dialog',
  templateUrl: './register-form-dialog.component.html',
  styleUrls: ['./register-form-dialog.component.css']
})
export class RegisterFormDialogComponent {
  hide = true;
registrationForm: FormGroup | any;
selectedFile: File | any = null;
constructor(private formBuilder: FormBuilder, private auth: UserService,
    private http: HttpClient, private route: Router) { }

ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
        hotelName: ['', Validators.required],
        userName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        password: ['', Validators.required],
        hotelAddress: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        description: ['', Validators.required],
        category: ['', Validators.required],
        country: ['', Validators.required],
        cnic: ['', Validators.required],
        // profilePictures: ['', Validators.required],

    });
}
onFileSelected(event: any) {
    if (event) {
        const file: File = event.target.files[0];

        console.log('Selected file => ', file)
        this.selectedFile = file;
        // No need to set the value here; it's already set to the selected File object
    }
}
Signup() {
    if (this.registrationForm.valid) {
        console.log(this.registrationForm.value);
        const formData = new FormData();
        formData.append('hotelName', this.registrationForm.get('hotelName').value);
        formData.append('userName', this.registrationForm.get('userName').value);
        formData.append('email', this.registrationForm.get('email').value);
        formData.append('password', this.registrationForm.get('password').value);
        formData.append('hotelAddress', this.registrationForm.get('hotelAddress').value);
        formData.append('phoneNumber', this.registrationForm.get('phoneNumber').value);
        formData.append('description', this.registrationForm.get('description').value);
        formData.append('category', this.registrationForm.get('category').value);
        formData.append('country', this.registrationForm.get('country').value);
        formData.append('cnic', this.registrationForm.get('cnic').value);






        formData.append('profilePictures', this.selectedFile);


        this.auth.userSignup(formData).subscribe((data) => {
            console.log(data);
            Swal.fire('Done!', 'Registration Successful Thank You ', 'success')
            this.registrationForm.reset();
            this.registrationForm.close();
            this.route.navigate(['/webhome/homepage'])

        });
    } else {
        Swal.fire('New Account!', 'Please fill the form ', 'info')
    }

}



}
