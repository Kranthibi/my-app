import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeesdatabase',
  templateUrl: './employeesdatabase.component.html',
  styleUrls: ['./employeesdatabase.component.css']
})
export class EmployeesdatabaseComponent implements OnInit {

  public item:number=0;
  public newemployee = {
    Empid: 0,
    EmpName: '',
    Role: '',
    JoiningDate: 0,
    PhoneNo: 0,
    Email: '',
    DOB: 0,
    Gender: false,
    Address: ''
  }

  public employees: any[] = [
    { Empid: 1526, EmpName: 'Kranthi', Role: 'Developer', JoiningDate: "8/8/2000", PhoneNo: 7894561230, Email: 'Kranthi123@gmail.com', DOB: "8/8/1996", Gender: false, Address: 'sfdgsd' },
    { Empid: 5236, EmpName: 'Kranthi', Role: 'Developer', JoiningDate: "8/8/2000", PhoneNo: 7894561230, Email: 'Kranthi123@gmail.com', DOB: "8/8/1996", Gender: false, Address: 'sfdgsd' },
    { Empid: 26, EmpName: 'Kranthi', Role: 'Developer', JoiningDate: "8/8/2000", PhoneNo: 7894561230, Email: 'Kranthi123@gmail.com', DOB: "8/8/1996", Gender: false, Address: 'sfdgsd' },

  ]

  constructor() { }

  ngOnInit(): void {
  }
  search(item:number){
    this.employees = this.employees.filter(employee=>employee.Empid.includes(item));
    alert(" not working")
  }

  register() {
    this.employees.push({ ...this.newemployee }),
    this.newemployee = {
      Empid: 0,
      EmpName: '',
      Role: '',
      JoiningDate: 0,
      PhoneNo: 0,
      Email: '',
      DOB: 0,
      Gender: false,
      Address: ''
    }
    alert("working")

  }
  delete(i: number) {
    this.employees.splice(i, 1);
  }
  clear() {
    // location.reload()
  }



}
