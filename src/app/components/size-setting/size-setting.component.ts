import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size-setting',
  templateUrl: './size-setting.component.html',
  styleUrls: ['./size-setting.component.css']
})
export class SizeSettingComponent implements OnInit {

	@Input('size') size : number;
	@Output('outSize') sizeConnector = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	decSize(){ // 8 <= size <= 36
		if(this.size - 2 >= 8){
			this.size -= 2;
		}
		this.sizeConnector.emit(this.size);
	}

	incSize(){
		if(this.size + 2 <= 36){
			this.size += 2;
		}
		this.sizeConnector.emit(this.size);
	}

}
