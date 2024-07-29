import { Component, OnInit } from '@angular/core';
import { MyntraService } from '../myntra.service';

@Component({
  selector: 'app-myntra',
  templateUrl: './myntra.component.html',
  styleUrls: ['./myntra.component.css']
})
export class MyntraComponent implements OnInit {

  public products:any=[];

  constructor(private _myntraService:MyntraService) { 
    _myntraService.getproducts().subscribe(
      (data:any)=>{
        this.products= data;
      },
      (err:any)=>{
        alert("Internal Server issue");
      }
    )


  }

  ngOnInit(): void {
  }
  mens(){
    this.products = this.products.filter((product:any)=>product.category.includes("men's clothing"));

  }
  jewelery(){
    this.products=this.products.filter((product:any)=>product.category.includes("jewelery"));
  }
  electronics(){
    this.products=this.products.filter((product:any)=>product.category.includes("electronics"));
  }
  womens(){
    this.products=this.products.filter((product:any)=>product.category.includes("women's clothing"));
  }

  s7to50(){
    this.products=this.products.filter((product:any)=>product.price >=7 && product.price<=50);
  }

  f50to300(){
    this.products=this.products.filter((product:any)=>product.price >=50 && product.price<=300);
  }
  t300to600(){
    this.products=this.products.filter((product:any)=>product.price >=300 && product.price<=600);
  }

  r600to1000(){
    this.products=this.products.filter((product:any)=>product.price >=600 && product.price<=1000);
  }
  sort(event:any){
    let value = event.target.value;
    if(value==="ltoh"){
      this.products=this.products.sort((a:any,b:any)=>a.price-b.price);
    }
    else if(value==="htol"){
      this.products=this.products.sort((a:any,b:any)=>b.price-a.price);
    }
    else{
      this._myntraService.getproducts().subscribe(
        (data:any)=>{
          this.products= data;
        }
      )
    }
  }
}
