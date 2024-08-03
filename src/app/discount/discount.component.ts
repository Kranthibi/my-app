import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  public count:number=0;
  

  constructor( private _siblingCommunicationService:SiblingCommunicationService) { 
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
