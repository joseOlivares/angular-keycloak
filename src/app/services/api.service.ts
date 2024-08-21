import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpClient=inject(HttpClient);



  constructor() { }


  getData() {
    return this.httpClient.get(environment.backendApi);
  }

  postData(){
    const data= {'mensaje':'Data enviada desde Angular'}
    return this.httpClient.post(environment.backendApi, data);
  }
}
