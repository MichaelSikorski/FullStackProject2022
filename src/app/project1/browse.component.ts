import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project1Component } from './project1.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project1-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})

export class Project1BrowseComponent implements OnInit {
	
	//paramsSub: Subscription;
	browseType = "";
	listOfGames: string[] = ([]);
	listOfGamesLocal: string[] = (["Banjo-Kazooie", "Castlevania: Bloodlines", "Chrono Trigger", "Donkey Kong", "Final Fantasy VI", 
		"Ghostbusters", "Gran Turismo 2", "Kirby's Dream Land", "Mega Man 5", "Metal Gear Solid", "Mortal Kombat II",
		"Perfect Dark", "Pokemon Red", "Resident Evil 2", "Silent Hill", "Sonic The Hedgehog 2", "Streets of Rage",
		"Super Mario 64", "Super Mario World 2: Yoshi's Island", "Super Metroid", "The Final Fantasy Legend",
		"The Legend of Zelda: A Link to the Past", "The Legend of Zelda: Majora's Mask", "The Legend of Zelda: Ocarina of Time", "Wipeout 3"]);

	constructor(private route: ActivatedRoute) { 
		/*this.paramsSub = this.route.params.subscribe(val => {
            this.browseType = val['by'];
        });*/
		/*this.paramsSub = this.route.queryParams.subscribe(params => {
			this.browseType = params['by'];
		});*/
	}

	ngOnInit(): void {
		if (true) {	// local fallback in case of errors connecting to database
			this.listOfGames = this.listOfGamesLocal;
		}
		
		this.route.queryParams.subscribe(params => {
			this.browseType = params['by'];
		});
		//console.log("Browsing by: " + this.browseType);
	}
	
}