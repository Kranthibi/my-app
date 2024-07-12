import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventregistration',
  templateUrl: './eventregistration.component.html',
  styleUrls: ['./eventregistration.component.css']
})
export class EventregistrationComponent implements OnInit {
  public name:string="";
  public names:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  res(){
    if(this.name !=""){
      this.names.push(this.name.trim());
      this.name='';
    }
  }

}
