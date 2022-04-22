import { Component, OnInit, EventEmitter, Output, isDevMode, OnDestroy } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CartService } from '../shared/cart.service';
import { Game } from '../models/Game';

@Component({
  selector: 'app-project1',
  templateUrl: './project1.component.html',
  styleUrls: ['./project1.component.css']
})

export class Project1Component implements OnInit, OnDestroy {
	
	title = 'Buy Old Games';
	itemsInCart = 0;

	logoSrc: String = '';

	constructor(private router: Router, 
				private titleService: Title, 
				private activatedRoute: ActivatedRoute, 
				private cart: CartService) { 
				
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
		
		this.cart.cartUpdated.subscribe((res: any) => {
			this.itemsInCart = res.length;
		});
		
	}
	
	ngOnDestroy() {
		this.cart.clearCart();	// Clear cart to prevent de-sync in view when component is destroyed
	}

	onSubmit(f: NgForm) {
		this.router.navigateByUrl('/project1/browse?by=search#' + f.value.searchstring);
	}
}