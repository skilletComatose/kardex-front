import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, CreateProduct } from '../../interfaces/product.interface';
import { environments } from '../../../../environments/enviroments';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private baseUrl: string = environments.baseUrl;
	private apiVersion: string = 'api/v1'

	constructor(private http: HttpClient) { }

	getAllProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.getUrl(''))
	}

	addToStock(produtId: number, quantity: number): Observable<Product> {
		const url: string = this.getUrl(`/${produtId}/stock/add/${quantity}`);
		return this.http.put<Product>(url, {})
	}

	reduceStock(produtId: number, quantity: number): Observable<Product> {
		return this.http.put<Product>(this.getUrl(`/${produtId}/stock/reduce/${quantity}`), {})
	}

	createProduct(createProductData: CreateProduct): Observable<Product> {
		return this.http.post<Product>(this.getUrl(``), createProductData)
	}

	private getUrl(path: string): string {
		return `${this.baseUrl}/${this.apiVersion}/products${path}`;
	}
}
