import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditProductDialogResult, Product } from '../../../kardex/interfaces/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditEnumOption } from '../../../kardex/enum/product.enum';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.css'
})
export class DialogComponent {

	public productForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<DialogComponent, EditProductDialogResult>,
		@Inject(MAT_DIALOG_DATA) public product: Product
	) {
		this.productForm = this.fb.group({
			name: [{ value: product.name, disabled: true }],
			description: [{ value: product.description, disabled: true }],
			price: [{ value: product.price, disabled: true }],
			stockQuantity: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]]
		});
	}

	onAddToStock(): void {
		if (this.productForm.valid) {
			const updatedValue = this.productForm.value.stockQuantity;
			this.dialogRef.close({ type: EditEnumOption.ADD_STOKC, quantity: updatedValue, productId: this.product.productId });
		}
	}

	onSubtractFromStock(): void {
		if (this.productForm.valid) {
			const updatedValue = this.productForm.value.stockQuantity;
			this.dialogRef.close({ type: EditEnumOption.REDUCE_STOCK, quantity: updatedValue, productId: this.product.productId });
		}
	}

	onCancel(): void {
		this.dialogRef.close({type: EditEnumOption.CANCEL, quantity: 0, productId: this.product.productId});
	}
}
