import { Component, OnInit, Output, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
	selector: 'app-project2',
	templateUrl: './project2.component.html',
	styleUrls: ['./project2.component.css']
})
export class Project2Component implements OnInit {
	
	@ViewChild('3dspace') canvas!: HTMLElement;
	
	constructor() { 
	
	}


	ngOnInit() {
		
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		//document.getElementById("3dspace").appendChild( renderer.domElement );
		this.canvas.appendChild(renderer.domElement);

		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new THREE.Mesh( geometry, material );
		scene.add( cube );

		camera.position.z = 5;
	}

	selectedType = 'single';
	selectedStyle = 'style1';
	selectedMaterial = 'mat1';
	selectedColor1 = 'green';
	selectedColor2 = 'green';

}
