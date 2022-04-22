import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-under-development',
  templateUrl: './under-development.component.html',
  styleUrls: ['./under-development.component.css']
})
export class UnderDevelopmentComponent implements OnInit {

	project = '';
	
  constructor(private activatedRoute: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
	this.activatedRoute.url.subscribe(url => {
		this.project = url.toString();
	});
	  
  }


}
