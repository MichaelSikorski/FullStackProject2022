import { Component } from '@angular/core'; 
//import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FullStackProject';
  
  /*listOfProjects = ([
	{ path: 'project1', name: "Project 1" },
	{ path: 'project2', name: "Project 2" },
	{ path: 'project3', name: "Project 3" },
	{ path: 'project4', name: "Project 4" },
	{ path: 'project5', name: "Project 5" }
  ]);*/
  
  listOfProjects = ([
	{ path: 'project1', name: "Buy Old Games" },
	{ path: 'project2', name: "Project 2" }
  ]);
  
}
