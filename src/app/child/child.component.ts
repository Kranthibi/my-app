import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   @Input() public ac:string="";

  //  event Create

  @Output() public bEvent:EventEmitter<any>= new EventEmitter();



   public bc:string="";

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    // event Emit

    this.bEvent.emit(this.bc);
  }

}
