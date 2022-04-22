import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { Project1BrowseComponent } from './project1/browse.component';
import { UnderDevelopmentComponent } from './under-development/under-development.component';
import { ViewCartComponent } from './project1/view-cart/view-cart.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Project1Component,
    PageNotFoundComponent,
    Project2Component,
    Project3Component,
	Project1BrowseComponent,
	UnderDevelopmentComponent,
	ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
	ReactiveFormsModule,
	MatSidenavModule,
	MatListModule,
	MatSelectModule,
	FormsModule,
	CommonModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
	
}
