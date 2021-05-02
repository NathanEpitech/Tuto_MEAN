import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Pangolin} from "../models/pangolin.model";

const baseUrl = 'http://localhost:8080/api/pangolins';

@Injectable({
  providedIn: 'root'
})
export class PangolinService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  findByFamily(family: any): Observable<Pangolin[]> {
    return this.http.get<Pangolin[]>(`${baseUrl}?famille=${family}`);
  }
}
