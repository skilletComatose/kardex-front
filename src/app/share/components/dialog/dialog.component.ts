import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../kardex/interfaces/product.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrl: './dialog.component.css'
})
export class DialogComponent {

	public productForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Product
	) {
		this.productForm = this.fb.group({
			name: [{ value: data.name, disabled: true }],
			description: [{ value: data.description, disabled: true }],
			price: [{ value: data.price, disabled: true }],
			stockQuantity: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)] ]
		  });
	 }

	 onAddToStock(): void {
		if (this.productForm.valid) {
		  const updatedValue = this.productForm.value.stockQuantity;
		//   this.dialogRef.close({ action: 'add', quantity: updatedValue }); 
		}
	  }
	
	  onSubtractFromStock(): void {
		if (this.productForm.valid) {
		  const updatedValue = this.productForm.value.stockQuantity;
		//   this.dialogRef.close({ action: 'subtract', quantity: updatedValue }); 
		}
	  }

	onCancel(): void {
		//retorno los datos del formulario
		this.dialogRef.close(this.productForm.value);
	}

	onUpdate(): void {
		// if (this.productForm.valid) {
		//   this.dialogRef.close(this.productForm.value); // Cierra el diálogo y devuelve los datos del formulario
		// }
	  }
}
