import { Component, OnInit } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  public students:any=[];
 

  constructor(private _studentcardService :StudentcardService) { 

    _studentcardService.getStudent().subscribe(
      (data:any)=>{
        this.students=data;
      }
    )
  }

  ngOnInit(): void {

  }
  delete(id:string){
    this._studentcardService.deleteStudentCard(id).subscribe(
      (data:any)=>{
        this.students=data;
        location.reload();
      }
    )
  }
  // edit(id:string){
  //   this._studentcardService.editStudentCard(id).subscribe(
  //     (data:any)=>{
  //       this._studentcardService=data;
  //     }
  //   )

  



}
