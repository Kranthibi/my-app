import { Injectable } from '@angular/core';
import { BehaviorSubject, findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingCommunicationService {

  // create
  // public count:number= 0;
   public cartcount$:BehaviorSubject<number>=new BehaviorSubject(0);
   
  //  set

  setCount(value:any){
    // this.count=value;
     this.cartcount$.next(value);
  }

  // get

  getCount(){
    return (this.cartcount$ );

  }


  constructor() { }
}
