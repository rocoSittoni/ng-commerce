import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment as env } from 'src/environments/environment';
import { Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  // getProducts() {
  //   return this.http.get('https://localhost:3000/api/products');
  // }



}
