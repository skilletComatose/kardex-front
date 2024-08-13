import { Component, Input } from '@angular/core';
import { Product, Category } from '../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-cardd.component.html',
  styleUrl: './product-cardd.component.css'
})
export class ProductCarddComponent {

  @Input() public product!: Product;

  public keysToShow = ['name', 'description'];


  getFilteredCategory(category: Category): string[] {
    return Object.entries(category)
      .filter(([key]) => this.keysToShow.includes(key))
      .map(([key, value]) => value);
  }

}
