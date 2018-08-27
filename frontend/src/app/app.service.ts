import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Risk } from './models/risk';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  API_URL  =  'http://localhost:8000';
  constructor(private  httpClient:  HttpClient) {}

  getRisks(): Observable<Risk[]> {
    return  this.httpClient.get<Risk[]>(`${this.API_URL}/risks`);
  }

  getRisksById(id: number): Observable<Risk> {
    return  this.httpClient.get<Risk>(`${this.API_URL}/risks/${id}`);
  }
}
