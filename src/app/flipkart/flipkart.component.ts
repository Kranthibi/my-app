import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {


  public item: string = "";
  // public name:string="";
  // public price:number=0;
  // public rating:number=0;
  // public freedelivery= false;

  public newpro = {
    name: '',
    price: 0,
    rating: 0,
    freedelivery: false
  };



  public products: any[] = [
    { name: 'pen', price: 20, rating: 0.5, freedelivery: false },
    { name: 'phone', price: 20000, rating: 2.4, freedelivery: true },
    { name: 'laptop', price: 50000, rating: 3.5, freedelivery: true },
    { name: 'toycar', price: 500, rating: 2.1, freedelivery: false },
    { name: 'oil', price: 2000, rating: 5, freedelivery: false }

  ]

  constructor() { }

  ngOnInit(): void {
  }



  search(item: string) {
    this.products = this.products.filter(product => product.name.includes(item))
  }

  delete(i: number) {
    this.products.splice(i, 1);

  }
  free() {
    this.products = this.products.filter(product => product.freedelivery);
  }

  low() {
    this.products = this.products.sort((a, b) => a.price - b.price);
  }
  high() {
    this.products = this.products.sort((a, b) => b.price - a.price);
  }


  Rlow() {
    this.products = this.products.sort((a, b) => a.rating - b.rating);
  }
  Rhigh() {
    this.products = this.products.sort((a, b) => b.rating - a.rating);
  }

  discount() {
    let total = this.products.map(product => {
      product.price = product.price / 2;
      return product
    })
  }
  charges() {
    this.products = this.products.filter(product => product.freedelivery == false);
    let totalprice = this.products.map(product => {
      product.price = product.price + 20;
      return product
    })
  }
  total() {
    let totalprice = this.products.reduce((sum, a) => sum + a.price, 0);
    alert("total amount " + totalprice);

    //  console.log(this.products,totalprice);
  }

  // cart(){
  //   let totalcartitems=this.products.reduce((sum,a)=>sum);
  //  alert("total amount "+ totalcartitems);

  //  console.log(this.products,totalcartitems);
  // }

  cart() {
    let length = this.products.length;
    alert(length + " items are in Cart");

    // console.log(this.products,length);
  }
  add() {
    this.products.push({ ...this.newpro });
    this.newpro = {
      name: '', price: 0, rating: 0, freedelivery: false
    }

  }


} 
