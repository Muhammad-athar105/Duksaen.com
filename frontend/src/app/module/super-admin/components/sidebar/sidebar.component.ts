import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private auth: UserService ,private router:Router) { }
  logout() : void {
    this.auth.logout();
    // this.router.navigate(['./webhome/homepage'])
  }
  isSearchExpanded: boolean = false;

  toggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
  }

  expandSearch() {
    this.isSearchExpanded = true;
  }

  collapseSearch() {
    if (this.isSearchExpanded) {
      this.isSearchExpanded = false;
    }
  }
}
