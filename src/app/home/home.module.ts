import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { catchError } from 'rxjs';
import { CatnavigationComponent } from './components/catnavigation/catnavigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    CatnavigationComponent,
    SidenavigationComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
