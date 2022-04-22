import { Component, OnInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-project1-home',
  templateUrl: './project1home.component.html',
  styleUrls: ['./project1home.component.css']
})

export class Project1HomeComponent implements OnInit {
	
	title = 'Buy Old Games';
	itemsInCart = 0;
	image1src: String = '';
	image2src: String = '';

	constructor() { 
		if (isDevMode()) {	// Application run locally with ng serve
		
			this.image1src = "../../assets/home_fantasy.jpg";
			this.image2src = "../../assets/home_scifi.jpg";
			
		} else {	// Application running on Github Pages
		
			this.image1src = "assets/home_fantasy.jpg";
			this.image2src = "assets/home_scifi.jpg";
		}
	}

	ngOnInit(): void {
		
	}
	
}