import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-fond',
  templateUrl: './not-fond.component.html',
  styleUrls: ['./not-fond.component.css']
})
export class NotFondComponent {
  constructor(private router:Router){}

  goToLogin() {
    this.router.navigate(['/webhome/homepage']);
  }

}
