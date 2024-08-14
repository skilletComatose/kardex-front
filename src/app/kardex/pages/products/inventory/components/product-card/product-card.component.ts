import { Component, Input } from '@angular/core';
import { Product, Category, EditProductDialogResult, StockStrategy } from '../../../../../interfaces/product.interface';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../../share/components/dialog/dialog.component';
import { EditEnumOption } from '../../../../../enum/product.enum';
import { ProductService } from '../../../../../services/product.service';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

	@Input() public product!: Product;

	public loading: boolean = false;

	private readonly stockStrategy: StockStrategy[] = [
		{
			type: EditEnumOption.ADD_STOKC,
			apply: (productId, quantity) => this.productService.addToStock(productId, quantity)
		},
		{
			type: EditEnumOption.REDUCE_STOCK,
			apply: (productId, quantity) => this.productService.reduceStock(productId, quantity)
		}
	]


	constructor(public dialog: MatDialog,
		private productService: ProductService
	) { }

	public keysToShow = ['name', 'description'];


	openDialog(): void {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '600px',
			height: '500px',
			data: this.product
		});

		dialogRef.afterClosed().subscribe(this.handleDialogClose.bind(this));
		
	}


	getFilteredCategory(category: Category): string[] {
		return Object.entries(category)
			.filter(([key]) => this.keysToShow.includes(key))
			.map(([key, value]) => value);
	}

	private handleDialogClose(result: EditProductDialogResult): void {
		const strategy: StockStrategy | undefined = this.stockStrategy.find(strategy => result.type === strategy.type);
		if (strategy) {
			this.applyStockStrategy(strategy, result.productId, result.quantity);
		}
	}

	private applyStockStrategy(strategy: StockStrategy, productId: number, quantity: number): void {
		this.loading = true;
		strategy.apply(productId, quantity)
			.subscribe({
				next: this.onStockUpdateSuccess.bind(this),
				error: this.onStockUpdateError.bind(this)
			});
	}

	private onStockUpdateSuccess(result: Product): void {
		this.product = result;
		this.loading = false;
	}

	private onStockUpdateError(err: any): void {
		console.error(err);
		this.loading = false;
	}


	truncateText(text: string, maxLength: number = 20): string {
		if (text.length > maxLength) {
		  return text.substring(0, maxLength) + '...';
		}
		return text;
	  }
}
