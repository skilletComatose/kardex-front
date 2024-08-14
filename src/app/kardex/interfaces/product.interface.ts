import { Observable } from "rxjs";
import { EditEnumOption } from "../enum/product.enum";

export interface Product {
    productId: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    imageUrl: string;
    category: Category;
    createdAt: string;
    updatedAt: string;
}

export interface Category {
    categoryId: number;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
}


export interface EditProductDialogResult {
    type: EditEnumOption,
    quantity: number;
    productId: number;
}

export interface StockStrategy {
    type: EditEnumOption;
    apply: (productId: number, quantity: number) => Observable<Product>;
}

export interface CreateProduct {
    name: string;
    description: string;
    price: number;
    categoryId: number;
    stockQuantity: number;
    imageUrl: string;
}