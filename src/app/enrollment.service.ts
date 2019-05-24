import { Injectable } from '@angular/core';
import {Users} from './users'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url="http://localhost:3000/enroll";

  constructor(private _http:HttpClient) { }
  enroll(user){
    return this._http.post(this._url , user)
     }
}
