import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Apod } from "../models/apod";
import { NgApodConfig } from "../../../config/ng_apod.config";

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private url: string;
  constructor(
    private ngApodConfig: NgApodConfig,
    private http: HttpClient) {
    this.url = `https://api.nasa.gov/planetary/apod?api_key=${this.ngApodConfig.key}`;
  }

  // getApod(): Observable<Apod> {
  //   return this.http.get<Apod>(this.url);
  // }

  getApod(date: string): Observable<Apod> {
    return this.http.get<Apod>(`${this.url}&date=${date}`);
  }
}
