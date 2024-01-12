import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RenderComponent } from './render/render.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FiltersComponent } from './filters/filters.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {
    path: '', component: RenderComponent, children: [
      { path: 'header', component: HeaderComponent },
      { path: 'homepage', component: HomePageComponent },
      { path: 'nav', component: NavBarComponent },
      { path: 'search', component: SearchComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'filter', component: FiltersComponent },
      { path: 'review', component: ReviewsComponent },


      { path: '', redirectTo: '/webhome/homepage', pathMatch: 'full' },
      {
        path: 'hotels',
        loadChildren: () => import('./hotels/hotels.module').then((m) => m.HotelsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
