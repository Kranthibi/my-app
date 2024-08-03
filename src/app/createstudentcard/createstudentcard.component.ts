import { Component, OnInit } from '@angular/core';
import { StudentcardService } from '../studentcard.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudentcard',
  templateUrl: './createstudentcard.component.html',
  styleUrls: ['./createstudentcard.component.css']
})
export class CreatestudentcardComponent implements OnInit {

  constructor( private _studentcardService:StudentcardService) { }

  public createStudentCard: FormGroup= new FormGroup({
    name:new FormControl(),
    phone:new FormControl(),
    dob: new FormControl(),
    city:new FormControl(),
    email:new FormControl(),
    image:new FormControl(),
    schoolPin:new FormControl()
  })

  ngOnInit(): void {
  }

  create(){
    this._studentcardService.createStudentCard(this.createStudentCard.value).subscribe(
      (data:any)=>{
        alert('Created successfully')
       this.createStudentCard.reset()
        
      }
    )
  }

}
