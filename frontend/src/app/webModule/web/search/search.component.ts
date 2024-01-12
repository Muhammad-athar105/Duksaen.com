import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FilterService } from 'src/app/core/services/filter.service';

import { HoteldataService } from 'src/app/core/services/hoteldata.service';
import { SearchHotelService } from 'src/app/core/services/search-hotel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  value = 'Clear me';
  hotels: any = [];
  // searchcontrol = new FormControl('')
  constructor(private hotelService: HoteldataService, private router: Router, private filterdata: FilterService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const hotelAddress = params['hotelAddress'];
      const checkIn = params['checkIn'];
      const checkout = params['checkout'];
      const noTravaelers = params['noTravaelers'];

      this.filterdata.filterHotel(hotelAddress).subscribe((data) => {
        this.hotels = data;
        
        // console.log("dfjdfdfhkh", data)



      });

    });
  }

  viewHotelDetail(hotelId: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: hotelId },
    };
    // console.log("befor ID", hotelId)
    this.router.navigate(['/webhome/hotels'], navigationExtras)
  }
}
