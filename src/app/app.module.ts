import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './home/components/header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatnavigationComponent } from './home/components/catnavigation/catnavigation.component';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HomeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
