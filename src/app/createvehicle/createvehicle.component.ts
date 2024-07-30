import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent implements OnInit {

  public createVehicleForm:FormGroup= new FormGroup({

    Vehicle:new FormControl(),
    manufacturer:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    fuel:new FormControl(),
    color:new FormControl(),
    image:new FormControl(),
    cost:new FormControl()
  })
  public id:string="";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute) {
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // alert(data.id)
        this.id= data.id;
        _vehicleService.getVehicleDetails(data.id).subscribe(
          (data:any)=>{
            this.createVehicleForm.patchValue(data)
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.id){
      // edit
      this._vehicleService.updateVehicle(this.createVehicleForm.value,this.id).subscribe(
        (data:any)=>{
          alert('updated succesfully');
          this.createVehicleForm.reset();

        },
        (err:any)=>{
          alert('Internal Server Error');
        }
      )

    }
    else {
      // create
      this._vehicleService.createVehicle(this.createVehicleForm.value).subscribe(
        (data:any)=>{
          alert('Successfully Created');
          this.createVehicleForm.reset();
        },
        (err:any)=>
          alert('Internal Serverr Issue')
      )
    }
   

  }

}
