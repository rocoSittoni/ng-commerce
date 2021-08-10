import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Product } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http: HttpClient ) { }

  getProductList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Product>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Product>>(`${env.BASE_URL}/products`, {
      params: params,
    })
  }

}
