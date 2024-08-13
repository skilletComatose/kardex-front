export interface Product {
    productId:     number;
    name:          string;
    description:   string;
    price:         number;
    stockQuantity: number;
    imageUrl:      string;
    category:      Category;
    createdAt:     string;
    updatedAt:     string;
}

export interface Category {
    categoryId:  number;
    name:        string;
    description: string;
    createdAt:   string;
    updatedAt:   string;
}
