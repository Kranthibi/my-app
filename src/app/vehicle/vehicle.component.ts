import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  public vehicles:any=[];
  public item:string="";
  public column:string="";
  public order:string="";
  public limit:number=0;
  public pageno:number=0;



  constructor(private _vehicleService:VehicleService) { 
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert('internal issue');
      }
    )
  }



  
  ngOnInit(): void {
  }
  filter(){
    this._vehicleService.getFilteredVehicles(this.item).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert(" Internal server error");
      }
    )
  }

  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server issue")
      }
    )
  }
  page(){
    this._vehicleService.getPagedVehicles(this.limit,this.pageno).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("internal server issue")
      }
    )
  }
  delete(id:string){
    this._vehicleService.getDeletedVehicle(id).subscribe(
      (data:any)=>{
        alert("Successfully Deleted");
        location.reload();
      },
      (err:any)=>{
        alert("Deletion Fail");
      }
    )
  }

}
