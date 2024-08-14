import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
    productoForm: FormGroup;

    formCreation = [
        {label : 'Nombre del producto' , formControlName : 'name' },
        {label : 'Descripción' , formControlName : 'description' },
        {label : 'Precio' , formControlName : 'price' },
        {label : 'Categoria' , formControlName : 'category' },
        {label : 'Stock' , formControlName : 'quantity' },
        {label : 'Imagen url' , formControlName : 'urlImagen' }
    ] 
    
    constructor(private fb: FormBuilder) {
        this.productoForm = this.fb.group({
            name: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: [null, [Validators.required,  Validators.pattern(/^[1-9]\d*$/)]],
            category: [null, [Validators.required]],
            quantity: [null, [Validators.required,  Validators.pattern(/^[1-9]\d*$/)]],
            urlImagen: ['', [Validators.required]]
        });
    }

    onSave() {
        
    }
}
