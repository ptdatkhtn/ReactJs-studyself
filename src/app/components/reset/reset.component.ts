import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

	@Output('outReset') resetConnector = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() {
	}

	outReset(){
		this.resetConnector.emit(true);
	}

}
