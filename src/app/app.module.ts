import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Project2Component } from './project2/project2.component';
import { Project3Component } from './project3/project3.component';
import { Project1BrowseByNameComponent } from './project1/browsebyname.component';
import { Project1BrowseComponent } from './project1/browse.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Project1Component,
    PageNotFoundComponent,
    Project2Component,
    Project3Component,
	Project1BrowseByNameComponent,
	Project1BrowseComponent
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
	CommonModule/*,
	RouterModule.forRoot([
		{path: 'home', component: HomeComponent},
		{path: 'project1', component: Project1Component},
		//{path: 'project2', component: Project2Component},
		{path: '', redirectTo: 'home', pathMatch: 'full'},
		{path: '**', component: PageNotFoundComponent}
	])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
	
}
