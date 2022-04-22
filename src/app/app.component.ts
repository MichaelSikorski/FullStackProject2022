import { Component } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'FullStackProject';
   
  listOfProjects = ([
	{ path: 'project1', name: "Buy Old Games" },
	{ path: 'project2', name: "Project 2" },
	{ path: 'project3', name: "Project 3" },
  ]);
  
}
