import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public createform: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl()

  })

  constructor() {
    this.createform.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'DayScholor') {
          // add busfee
          this.createform.addControl('busfee', new FormControl());
          this.createform.removeControl('hostelfee');
        }
        else if (data == 'Residential') {
          // add hostel fee
          this.createform.addControl('hostelfee', new FormControl());
          this.createform.removeControl('busfee');
        }
      }
    )
  }

  ngOnInit(): void {
  }
  submit() {
    console.log(this.createform)
  }

}
