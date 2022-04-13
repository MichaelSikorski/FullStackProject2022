import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project1-browsebyname',
  templateUrl: './browsebyname.component.html',
  styleUrls: ['./browsebyname.component.css']
})

export class Project1BrowseByNameComponent implements OnInit {
	
	listOfGames: string[] = ([]);
	listOfGamesLocal: string[] = (["Banjo-Kazooie", "Castlevania: Bloodlines", "Chrono Trigger", "Donkey Kong", "Final Fantasy VI", 
		"Ghostbusters", "Gran Turismo 2", "Kirby's Dream Land", "Mega Man 5", "Metal Gear Solid", "Mortal Kombat II",
		"Perfect Dark", "Pokemon Red", "Resident Evil 2", "Silent Hill", "Sonic The Hedgehog 2", "Streets of Rage",
		"Super Mario 64", "Super Mario World 2: Yoshi's Island", "Super Metroid", "The Final Fantasy Legend",
		"The Legend of Zelda: A Link to the Past", "The Legend of Zelda: Majora's Mask", "The Legend of Zelda: Ocarina of Time", "Wipeout 3"]);

	constructor() { }

	ngOnInit(): void {
		if (true) {
			this.listOfGames = this.listOfGamesLocal;
			console.log(this.listOfGames);
		}
	}

}