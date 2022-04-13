import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Project1Component } from './project1/project1.component';
import { Project1HomeComponent } from './project1/project1home.component';
import { Project1BrowseByNameComponent } from './project1/browsebyname.component';
import { Project1BrowseComponent } from './project1/browse.component';
import { Project2Component } from './project2/project2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{	path: 'project1', component: Project1Component,
		children: [
		{
			path: 'home', component: Project1HomeComponent, data: { title: 'FullStackProject - Buy Old Games' }
		}, {
			path: 'browse', component: Project1BrowseComponent, data: { title: 'Buy Old Games - Browse' }
		}, { 
			path: '', redirectTo: 'home', pathMatch: 'full' 
		}, { 
			path: '**', component: PageNotFoundComponent 
		}]
		/*children: [
		{
			path: 'home',
			component: Project1HomeComponent
		}, {
			path: 'browseByName',
			component: Project1BrowseByNameComponent
		}, {
			path: 'browseByPlatform',
			component: Project1BrowseByPlatformComponent
		},{ 
			path: '', redirectTo: 'home', pathMatch: 'full' 
		}, { 
			path: '**', component: PageNotFoundComponent 
		}]*/
	},
	//{ path: 'project1', component: Project1Component },
	//{path: 'project2', component: Project2Component},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];
/*const routes: Routes = [];*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
