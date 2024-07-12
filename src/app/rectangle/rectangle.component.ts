import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

  public Length:number = 0;
  public Breadth:number = 0;
  public result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  area(){
    this.result = this.Length*this.Breadth;
  }
  per(){
    this.result = 2*(this.Length*this.Breadth);
  }
  

}
