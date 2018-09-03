import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public colorDefault : string;
	public fontSizeDefault : number;

	constructor(){
		this.init();
	}

	init(){
		this.colorDefault = 'red';
		this.fontSizeDefault  = 16;
	}

	getColor(color){
		this.colorDefault = color;
	}

	getSize(size){
		this.fontSizeDefault = size;
	}

	getReset(){
		this.init();
	}

}
