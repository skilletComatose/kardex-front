import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';
import { ProductService } from '../../../services/product.service';

@Component({
	selector: 'app-manage-product',
	templateUrl: './manage-product.component.html',
	styleUrl: './manage-product.component.css'
})
export class ManageProductComponent implements OnInit {

	public products: Product[] = [];

	constructor(private productService: ProductService) {

	}
	ngOnInit(): void {
		this.productService.getAllProducts()
			.subscribe(
				{
					next: resp => {
						this.products = resp
						console.log(resp);
					},
					error: err => console.log("error;", err)
				}
			)


	}
}
