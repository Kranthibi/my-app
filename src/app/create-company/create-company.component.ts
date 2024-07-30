import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  public companyForm:FormGroup= new FormGroup({
    companyname: new FormControl(null,[Validators.required,Validators.minLength(3)]),
    founded:new FormControl(),
    ceo:new FormControl(),
    location: new FormGroup({
      address: new FormControl(),
      city: new FormControl(null,[Validators.required,Validators.minLength(3)]),
      state:new FormControl(),
      zipcode:new FormControl(),
      country: new FormControl()
    }),
    departments : new FormArray([]),
    companyType: new FormControl(),
    type: new FormControl(),


  })
 
 
  constructor() {
    this.companyForm.get('type')?.valueChanges.subscribe(
      (data: any) => {
        if (data == 'service') {
          // add busfee
          this.companyForm.addControl('clientName', new FormControl(null,[Validators.required]));
          this.companyForm.removeControl('productName');
        }
        else if (data == 'product') {
          // add hostel fee
          this.companyForm.addControl('productName', new FormControl(null,[Validators.required]));
          this.companyForm.removeControl('clientName');
        }
      }
    )
   }

  ngOnInit(): void {
  }
  get departmentsFormArray(){
    return this.companyForm.get('departments') as FormArray;

   }
  departments(){
    this.departmentsFormArray.push(
      new FormGroup({
        departmentname:new FormControl(),
        head:new FormControl(),
        employees:new FormControl(),
        budget:new FormControl(null,[Validators.required,Validators.min(10000)])
      })

    )
  }

  delete(i:number){
    this.departmentsFormArray.removeAt(i);
  }

  

}
