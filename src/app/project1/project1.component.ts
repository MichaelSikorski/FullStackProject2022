import { Component, OnInit, EventEmitter, Output, isDevMode } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})

export class Project1Component implements OnInit {
	
	title = 'Buy Old Games';
	itemsInCart = 0;

	logoSrc: String = '';

	constructor(private router: Router, private titleService: Title, private activatedRoute: ActivatedRoute) { 
		if (isDevMode()) {
			this.logoSrc = "../../assets/logo.jpg";
		} else {
			this.logoSrc = "assets/logo.jpg";
		}
	}

	ngOnInit(): void {
		this.router.events.pipe(
		filter((event) => event instanceof NavigationEnd),
		map(() => {
		  let route: ActivatedRoute = this.router.routerState.root;
		  let routeTitle = '';
		  while (route!.firstChild) {
			route = route.firstChild;
		  }
		  if (route.snapshot.data['title']) {
			routeTitle = route!.snapshot.data['title'];
		  }
		  return routeTitle;
		})
		)
		.subscribe((title: string) => {
		if (title) {
		  this.titleService.setTitle(`${title}`);
		}
		});
		
	}
	
	setSortingType(e: Event): String {
		// console.log((e.target as HTMLInputElement).innerHTML);
		// this.sortingType = (e.target as HTMLInputElement).innerHTML;
		// this.setSortType.emit((e.target as HTMLInputElement).innerHTML);
		return (e.target as HTMLInputElement).innerHTML;
	}
}