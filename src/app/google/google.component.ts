import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  public text:string=" ";
  public result:string=" ";

  constructor() { }

  ngOnInit(): void {
  }

  

}
