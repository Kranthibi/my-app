import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {

  public num1:number=0;
  public num2:number=0;
   public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  catch(value:number){
    this.result= value;
  }

}
