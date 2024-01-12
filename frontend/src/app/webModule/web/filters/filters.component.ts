import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';

import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  searchResult: any;

  @Output() searchResultEmitter = new EventEmitter<any>();



  searchForm: FormGroup | any;

  travlar: any[] = [
    { name: 'Adult1' },
    { name: 'Adult2' },
    { name: 'Adult3' },
    { name: 'Adult4' },
  ];
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      hotelAddress: ['',Validators.required],
      checkIn: [''],
      checkout: [''],
      noTravaelers: [''],
    })


  }

  search() {
    const navigationExtras: NavigationExtras = {
      queryParams: this.searchForm.value
    };

    this.router.navigate(['/webhome/search'], navigationExtras)
    // this.searchForm.reset();

  }


  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());



}
