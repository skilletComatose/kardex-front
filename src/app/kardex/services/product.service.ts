import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { environments } from '../../../environments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environments.baseUrl;
  private apiVersion:string = 'api/v1'

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/${this.apiVersion}/products`)
  }
}
