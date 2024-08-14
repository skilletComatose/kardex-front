import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category/category.service';
import { Category, CreateProduct } from '../../../interfaces/product.interface';
import { ProductService } from '../../../services/product/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrl: './create-product.component.css'
})
export class CreateProductComponent implements OnInit {
    productoForm: FormGroup;
    loading:boolean = false;
    categories: Category[] = [];


    private defaultImg = "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg"
    formCreation = [
        { label: 'Nombre del producto', formControlName: 'name' },
        { label: 'Descripción', formControlName: 'description' },
        { label: 'Precio', formControlName: 'price' },
        { label: 'Stock', formControlName: 'quantity' },
        { label: 'Imagen url', formControlName: 'imageUrl' }
    ]

    constructor(
        private fb: FormBuilder,
        private categoryService: CategoryService,
        private productService: ProductService,
        private snackBar: MatSnackBar
    ) {
        this.productoForm = this.fb.group({
            name: ['', [Validators.required]],
            description: ['', [Validators.required]],
            price: [null, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
            category: [null, [Validators.required]],
            quantity: [null, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
            imageUrl: ['',]
        });
    }
    ngOnInit(): void {
        this.categoryService.getAllCategories()
            .subscribe({
                next: resp => this.categories = resp
            })
    }

    saveProduct() {
        if (this.productoForm.invalid) return;

        const product: CreateProduct = {
            name: this.name,
            description: this.description,
            price: this.price,
            categoryId: this.category.categoryId,
            stockQuantity: this.quantity,
            imageUrl: this.imageUrl
        }

        this.loading = true;
        this.productService.createProduct(product)
            .subscribe({
                next: resp => {
                    this.loading = false
                    this.productoForm.reset()
                    this.snackBar.open('Se ha guardao el producto :', 'Cerrar')
                }

            })

    }

    get name() {
        return this.productoForm.get('name')?.value;
    }

    get description() {
        return this.productoForm.get('description')?.value;
    }

    get price() {
        return this.productoForm.get('price')?.value;
    }

    get category(): Category {
        return this.productoForm.get('category')?.value;
    }

    get quantity() {
        return this.productoForm.get('quantity')?.value;
    }

    get imageUrl() {
        const value = this.productoForm.get('imageUrl')?.value;
        return value ?? this.defaultImg;
    }

}
