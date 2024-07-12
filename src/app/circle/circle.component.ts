import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  public Radius:number = 0;
  public result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
    this.result = 3.14*(this.Radius*this.Radius);
  }
  per(){
    this.result = 2*(3.14*this.Radius);
  }

}
