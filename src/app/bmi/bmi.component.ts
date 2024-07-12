import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent implements OnInit {

  public height:number=0;
  public weight:number=0;
  public cal:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  calculate(){
    this.cal= this.weight/((this.height/100)*(this.height/100));
  }

}
