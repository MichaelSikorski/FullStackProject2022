import { Component, OnInit, isDevMode, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { Project1Component } from './project1.component';
import { Subscription } from 'rxjs';
import { CrudService } from '../shared/crud.service';
import { CartService } from '../shared/cart.service';
import { Game } from '../models/Game';

/*export class Game {
  _id?: Object;
  title?: string;
  platform?: string;
  genre?: string;
  release?: Date;
  price?: string;
  stock?: string;
}*/

@Component({
  selector: 'app-project1-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class Project1BrowseComponent implements OnInit, OnDestroy {

	sortType = "";
	filter: string | null = "all";
	browseHeading: string | null = null;
	showAddtoCart: boolean = false;
	@Output('productAdded') productAdded = new EventEmitter<Game>();
	
	listOfGames:any = null;
	firstLetters:Array<String> | null = null;
	listOfPlatforms:Array<String> | null = null;
	listOfGenres:Array<String> | null = null;
	listOfDates:Array<Date> | null = null;

	constructor(private route: ActivatedRoute, private crudService: CrudService, private cart: CartService) {
		
	}

	ngOnInit(): void {

		this.route.queryParams.subscribe(params => {
			this.sortType = params['by'];
			if (!this.listOfGames) {
				this.getListOfGames();
			} else {
				this.sortTitles(this.sortType);
				if (this.filter == 'all') {
					this.browseHeading = "Showing all titles sorted by " + this.sortType + (this.sortType == 'release'? " date": "");
				}
			}
		});

		this.route.fragment.subscribe(fragments => {
			if (fragments) {
				this.filter = fragments;
				if (this.filter == 'all') {
					this.browseHeading = "Showing all titles sorted by " + this.sortType + (this.sortType == 'release'? " date": "");
					//this.browseHeading = "";
				} else {
					if (this.sortType == 'name') {
						this.browseHeading = "Showing titles starting with the letter " + this.filter;
					} else if (this.sortType == 'platform') {
						this.browseHeading = "Showing titles for the " + this.filter + " platform";
					} else if (this.sortType == 'genre') {
						this.browseHeading = "Showing titles in the " + this.filter + " genre";
					} else if (this.sortType == 'release') {
						this.browseHeading = "Showing titles released in the year " + this.filter.substring(0,4);
					} else if (this.sortType == 'search') {
						this.browseHeading = "Showing search results for " + this.filter;						
					} 
				}

			} else {
				this.filter = "all";
				this.browseHeading = "Showing all titles sorted by " + this.sortType + (this.sortType == 'release'? " date": "");
			}
		});
		
	}
	
	ngOnDestroy() {
		console.log("Browse component destroyed");
	}

	getListOfGames(): void {
		if (!isDevMode()) {	// local fallback for Github Pages
			this.crudService.getAllGamesLocal().subscribe((res: {}) => {
				this.listOfGames = res;
				this.sortTitles(this.sortType);
			});
		} else {
			this.crudService.getAllGamesRemote().subscribe((res: {}) => {
				this.listOfGames = res;
				this.sortTitles(this.sortType);
			});
		}
	}

	filterTitles(x: any): boolean {

		if (this.filter == 'all') {
			return false;
		} else {
			if (this.sortType == 'release') {
				if (x.substring(0,4) == this.filter) {
					return false;
				}

				return true;

			} else {
				if (x == this.filter) {
					return false;
				}

				return true;
			}

		}

		return true;
	}

	sortTitles(by: string): void {

		if (by == 'name') {
			this.listOfGames.sort((a?: Game,b?: Game) => {
				if (!a || !b) {
					return 0;
				} else {
					if (a!.title! < b!.title!) {
						return -1;
					} else if (a!.title! > b!.title!) {
						return 1;
					}
					return 0;
				}
			});

			if (!this.firstLetters) {
			this.firstLetters = new Array<String>();
			for (let game of this.listOfGames) {
				if (!this.firstLetters.includes(game.title.charAt(0))) {
					this.firstLetters.push(game.title.charAt(0));
				}
			}
		}

		} else if (by == 'platform') {
			this.listOfGames.sort((a?: Game,b?: Game) => {
				if (!a || !b) {
					return 0;
				} else {
					if (a!.platform! < b!.platform!) {
						return -1;
					} else if (a!.platform! > b!.platform!) {
						return 1;
					}
					return 0;
				}
			});

			if (!this.listOfPlatforms) {
				this.listOfPlatforms = new Array<String>();
				for (let game of this.listOfGames) {
					if (!this.listOfPlatforms.includes(game.platform)) {
						this.listOfPlatforms.push(game.platform);
					}
				}
			}
		} else if (by == 'genre') {
			this.listOfGames.sort((a?: Game,b?: Game) => {
				if (!a || !b) {
					return 0;
				} else {
					if (a!.genre! < b!.genre!) {
						return -1;
					} else if (a!.genre! > b!.genre!) {
						return 1;
					}
					return 0;
				}
			});

			if (!this.listOfGenres) {
				this.listOfGenres = new Array<String>();
				for (let game of this.listOfGames) {
					if (!this.listOfGenres.includes(game.genre)) {
						this.listOfGenres.push(game.genre);
					}
				}
			}
		} else if (by == 'release') {
			this.listOfGames.sort((a?: Game,b?: Game) => {
				if (!a || !b) {
					return 0;
				} else {
					if (a!.release! < b!.release!) {
						return -1;
					} else if (a!.release! > b!.release!) {
						return 1;
					}
					return 0;
				}
			});

			if (!this.listOfDates) {
				this.listOfDates = new Array<Date>();
				for (let game of this.listOfGames) {
					if (!this.listOfDates.includes(game.release)) {
						this.listOfDates.push(game.release);
					}
				}
			}
		}

	}

	boxArt(game: any): String {
		if (!game.src) {
						
			let srcUrl = "";
			if (isDevMode()) {	// Application run locally with ng serve
				srcUrl = "../../../assets/game_imgs/";	
			} else {	// Application running on Github Pages
				srcUrl = "assets/game_imgs/";
			}
			srcUrl += game._id + ".jpg";	// Image files names are the same as the game's ID in the database
			
			return srcUrl;
		}
		
		return "";
	}
	
	addToCart(game: Game): void {
		this.cart.addToCart(game);		
	}
	
	cartContainsGame(game: Game): boolean {
		return this.cart.containsGame(game);
	}
	
	isInStock(game: Game): boolean {
		let inStock = false;
		for (let i=0; i<this.listOfGames.length; i++) {
			if (this.listOfGames[i]._id == game._id) {
				if (this.listOfGames[i].stock > 0) {				
					return true;
				}
			}
		}
		
		return inStock;
		
	}
	
	removeFromCart(game: Game): void {
		this.cart.removeFromCart(game);
	}
	
	searchTitles(game: Game): boolean {	// Search for games matching the search string by title, platform, or genre
		
		if (game!.title!.toLowerCase().includes(this.filter!.toLowerCase())) {
			return true;
		}
		
		if (game!.platform!.toLowerCase().includes(this.filter!.toLowerCase())) {
			return true;
		}
		
		if (game!.genre!.toLowerCase().includes(this.filter!.toLowerCase())) {
			return true;
		}
		
		return false;
	}
}