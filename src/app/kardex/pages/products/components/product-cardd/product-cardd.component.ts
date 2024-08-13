import { Component, Input } from '@angular/core';
import { Product, Category } from '../../../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../share/components/dialog/dialog.component';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-cardd.component.html',
	styleUrl: './product-cardd.component.css'
})
export class ProductCarddComponent {

	@Input() public product!: Product;

	constructor(public dialog: MatDialog) { }

	public keysToShow = ['name', 'description'];



	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '600px',
			height: '500px',
			data: this.product
		});

		// dialogRef.afterClosed().subscribe(result => {
		// 	if (result !== undefined) {
		// 		this.stock = result;
		// 	}
		// });
	}


	getFilteredCategory(category: Category): string[] {
		return Object.entries(category)
			.filter(([key]) => this.keysToShow.includes(key))
			.map(([key, value]) => value);
	}

}
