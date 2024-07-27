import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeesdatabase',
  templateUrl: './employeesdatabase.component.html',
  styleUrls: ['./employeesdatabase.component.css']
})
export class EmployeesdatabaseComponent implements OnInit {

  public employees:any[]=[
    {Emp_id:1526,Emp_Name:'Kranthi',Role:'Developer',Joining_Date:8/8/2000,Phone_No:7894561230,Email:'Kranthi123@gmail.com',DOB:8/8/996,Gender:false,Address:'sfdgsd'},
    {Emp_id:1526,Emp_Name:'Kranthi',Role:'Developer',Joining_Date:8/8/2000,Phone_No:7894561230,Email:'Kranthi123@gmail.com',DOB:8/8/1996,Gender:false,Address:'sfdgsd'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
