import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.css']
})
export class VehicledetailsComponent implements OnInit {
  public vehicle:any={};

  constructor(private _vehicleService:VehicleService,private _activatedRoute:ActivatedRoute) { 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // alert(data.id);
        _vehicleService.getVehicleDetails(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          },
          (err:any)=>{
            alert("something is issue");
          }

        )
      
      }


    )
  }

  ngOnInit(): void {
  }


}
