import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  public postCustomer(value: any): Promise<void> {
    return axios.post('http://localhost:4000/v1/customer-input', value);
  }
  public getAllCustomer(): Promise<any> {
    return axios.get('http://localhost:4000/v1/customer-input');
  }
}
