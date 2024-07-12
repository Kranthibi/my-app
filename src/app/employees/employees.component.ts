import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {


  
  public employees :any[]=[
    {Name:'Kranthi',Age:26,DOB:new Date('08/29/1996'),Experience:5.2,Package:12},
    {Name:'Sai',Age:28,DOB:new Date('06/20/1997'),Experience:6,Package:10},
    {Name:'Nikhil',Age:25,DOB:new Date('02/28/1998'),Experience:4.2,Package:16},
    {Name:'Durgesh',Age:24,DOB:new Date('04/09/1993'),Experience:2.6,Package:9},
    {Name:'Arif',Age:23,DOB:new Date('11/12/1992'),Experience:1.2,Package:8},
    {Name:'Venkat',Age:29,DOB:new Date('03/19/1991 '),Experience:3.9,Package:16},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
