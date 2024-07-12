import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  public ages:number[]=[10,20,30,40,50];

  public states:string[]=['Telangana','Pune','Goa','Kerala'];

  public products:any=[
    {name:'pen',price:20,rating:4},
    {name:'phone',price:20000,rating:4.3},
    {name:'laptop',price:50000,rating:3.5},
    {name:'toycar',price:500,rating:2.5},
    {name:'oil',price:2000,rating:1.8}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
