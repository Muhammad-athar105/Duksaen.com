import { Component } from '@angular/core';
import { HoteldataService } from 'src/app/core/services/hoteldata.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  hotel: any;
  constructor(private auth: UserService, private api: HoteldataService) { }
  logout(): void {
    this.auth.logout()
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
  ngOnInit(): void {
    this.get("");
    // console.log('test')
  }
  get(search: String) {
    const hotelId = localStorage.getItem('hotelId')
    this.api.gethotelID(hotelId).subscribe((response: any) => {
      this.hotel = response.hotel
      // console.log('hhhotel', this.hotel)
    })
  }

}
