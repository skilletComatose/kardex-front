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
	public selectedCategory: Category | undefined;

	constructor(private productService: ProductService) {

	}

	ngOnInit(): void {
		this.loadProducts()
	}



	private loadProducts() {
		this.productService.getAllProducts()
			.subscribe(
				{
					next: resp => {
						console.log("RESPUESTA OK")
						this.filteredProducts = resp.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
						this.products = [...this.filteredProducts];


						this.categories = this.filteredProducts.map(product => product.category)
							.filter((value, index, self) =>
								index === self.findIndex((t) => t.categoryId === value.categoryId)
							);


					},
					error: err => console.log("error;", err)
				}
			)
	}

	applyFilter(event: Event) {
		const inputElement = event.target as HTMLInputElement;
		const searchText = inputElement.value;	
		
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
		if (!category) {
			this.filteredProducts = [...this.products];
			return;
		};
		
		this.filteredProducts = this.products.filter(product =>
			product.category.categoryId === category.categoryId
		);
	}

	resetFilters() {
		this.selectedCategory = undefined;
		this.categorySelect.value = ''
		this.filteredProducts = this.products;
	}
}
