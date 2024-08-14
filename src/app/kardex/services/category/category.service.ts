import { Injectable } from '@angular/core';
import { environments } from '../../../../environments/enviroments';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../interfaces/product.interface';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	private baseUrl: string = environments.baseUrl;
	private apiVersion: string = 'api/v1'
	constructor(private http: HttpClient) { }


	getAllCategories(): Observable<Category[]> {
		return this.http.get<Category[]>(this.getUrl())
	}

	private getUrl(): string {
		return `${this.baseUrl}/${this.apiVersion}/categories`;
	}

}
