import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../sibling-communication.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public count:number=0;

  

  constructor( private _siblingCommunicationService:SiblingCommunicationService) { }

  ngOnInit(): void {
  }

  addCart(){
    this._siblingCommunicationService.setCount(this.count++);
  }
  

}
