import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  public count:number=0;

  constructor(private _siblingCommunicationService:SiblingCommunicationService) { 
    _siblingCommunicationService.getCount().subscribe(
      (data:any)=>{
        this.count=data;
      },
      (err:any)=>{
        alert("internal error");
      }
       
        
    )
  }

  ngOnInit(): void {
  }
 

}
