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
		@Inject(MAT_DIALOG_DATA) public data: Product
	) {
		this.productForm = this.fb.group({
			name: [{ value: data.name, disabled: true }],
			description: [{ value: data.description, disabled: true }],
			price: [{ value: data.price, disabled: true }],
			stockQuantity: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]]
		});
	}

	onAddToStock(): void {
		if (this.productForm.valid) {
			const updatedValue = this.productForm.value.stockQuantity;
			this.dialogRef.close({ action: EditEnumOption.ADD_STOKC, quantity: updatedValue });
		}
	}

	onSubtractFromStock(): void {
		if (this.productForm.valid) {
			const updatedValue = this.productForm.value.stockQuantity;
			this.dialogRef.close({ action: EditEnumOption.REDUCE_STOCK, quantity: updatedValue });
		}
	}

	onCancel(): void {
		this.dialogRef.close({action: EditEnumOption.CANCEL, quantity: 0});
	}
}
