import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HoteldataService } from 'src/app/core/services/hoteldata.service';
import { RegisterFormDialogComponent } from '../register-form-dialog/register-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';

import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchcontent: string = '';
  showSearch: boolean = false;
  searchText: string = '';
  searchResult: undefined|any[]
  constructor(private hotle: HoteldataService, private route: Router, public dialog: MatDialog){ }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.searchText = ''; // Reset the search text when hiding the search field
  }
  openDialog() {
    this.dialog.open(RegisterFormDialogComponent);
  }
  openDialogs() {
    this.dialog.open(LoginComponent);
  }
  searchHotle(querry: KeyboardEvent) {
    // if (querry) {
    //   const element = querry.target as HTMLInputElement;
    //   console.warn(element.value)
    //   this.hotle.searchHotel().subscribe((result: any[] | undefined) => {
    //     console.warn(result)
    //     this.searchResult = result
    //   })
    // }

  }



}
