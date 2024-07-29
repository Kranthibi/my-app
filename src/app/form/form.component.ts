import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { domainValidators } from '../circle/Validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public createform: FormGroup = new FormGroup({
    name: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required,Validators.min(0),Validators.max(100)]),
    phone: new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
    email: new FormControl(null,[Validators.email,domainValidators]),
    address: new FormGroup({
      city: new FormControl(null,[Validators.required]),
      pincode: new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type: new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl(),
    cards : new FormArray([])
  })

  get cardsFormArray(){
    return this.createform.get('cards') as FormArray;
  }
  addCard(){
    this.cardsFormArray.push(
      new FormGroup({
        number :new FormControl(null,[Validators.required]),
        expiry :new FormControl(null,[Validators.required]),
        cvv : new FormControl(null,[Validators.required,Validators.min(100),Validators.max(999)])
      })
    )
  }
  deleteCard(i:number){
    this.cardsFormArray.removeAt(i);

  }

  constructor() {
    this.createform.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'DayScholor') {
          // add busfee
          this.createform.addControl('busfee', new FormControl(null, [Validators.required,Validators.min(10000)]));
          this.createform.removeControl('hostelfee');
        }
        else if (data == 'Residential') {
          // add hostel fee
          this.createform.addControl('hostelfee', new FormControl(null,[Validators.required,Validators.min(10000)]));
          this.createform.removeControl('busfee');
        }
      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    this.createform.markAllAsTouched();
    console.log(this.createform)
  }

}
