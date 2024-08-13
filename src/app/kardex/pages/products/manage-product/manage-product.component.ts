import { Component, OnInit, ViewChild } from '@angular/core';
import { Category, Product } from '../../../interfaces/product.interface';
import { ProductService } from '../../../services/product.service';
import { MatSelect } from '@angular/material/select';

@Component({
	selector: 'app-manage-product',
	templateUrl: './manage-product.component.html',
	styleUrl: './manage-product.component.css'
})
export class ManageProductComponent implements OnInit {

	@ViewChild('categorySelect') categorySelect!: MatSelect;
	
	public filteredProducts: Product[] = [];
	public products: Product[] = [];
	public categories: Category[] = [];
	public selectedCategory:Category | undefined;

	constructor(private productService: ProductService) {

	}

	ngOnInit(): void {
		this.loadProducts()
	}



	private loadProducts() {
		console.log("CONSULTANDO PRODUCTOS")
		this.productService.getAllProducts()
			.subscribe(
				{
					next: resp => {
						console.log("RESPUESTA OK")
						this.filteredProducts = resp.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
						this.products = [...this.filteredProducts];	

						let categorySet: Set<Category> = new Set(this.filteredProducts.map(product => product.category));
						this.categories = Array.from(categorySet);

					},
					error: err => console.log("error;", err)
				}
			)
	}

	applyFilter(searchText: string) {
		this.filteredProducts = this.products
		.filter(product => this.selectedCategory 
					? this.selectedCategory.categoryId == product.category.categoryId
					: true
		)
		.filter(product =>
			product.name.toLowerCase().includes(searchText.toLowerCase()) ||
			product.description.toLowerCase().includes(searchText.toLowerCase())
		);
	}

	applyCategoryFilter(category: Category) {
		if(!category) {
			this.filteredProducts = [...this.products];
		};
		this.filteredProducts = this.products.filter(product =>
		  product.category.categoryId === category.categoryId
		);
	  }

	  resetFilters() {
		this.selectedCategory = undefined;
		 this.categorySelect.value= ''
		this.filteredProducts = this.products; 
	  }
}
