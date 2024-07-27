import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public name:string="";
  // public names:string[]=[];
  public price:number= 0;
  // public prices:number[]=[];
  public rating:number= 0;
  // public ratings:number[]=[];
  public items:any=[];



  constructor() { }

  ngOnInit(): void {
  }
  cart(){
    this.items.push({'name':this.name,'price':this.price,'rating':this.rating})
  }
}
