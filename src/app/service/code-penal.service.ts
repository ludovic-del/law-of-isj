import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CodePenalService {


  constructor(public http:HttpClient) { 
  this.readApi("http://localhost:3000/codepenal/alinea")
  subscribe((data)=>{
    console.log(data);
  });
  }
  readApi(url: string){
    this.http.get(url);
  }

}
function subscribe(arg0: (data: any) => void): void {
  throw new Error('Function not implemented.');
}

