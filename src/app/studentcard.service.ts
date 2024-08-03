import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentcardService {

  constructor(private _httpClient:HttpClient) { }

  getStudent():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  
  createStudentCard(data:any):Observable<any>{
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student/",data);
  }

  deleteStudentCard(id:string):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }

}
