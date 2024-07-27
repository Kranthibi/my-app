import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public createform:FormGroup= new FormGroup({
    name: new FormControl(),
    age:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      pincode:new FormControl()
    })
  })

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.createform)
  }

}
