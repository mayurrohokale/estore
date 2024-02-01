import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem, private productsStoreItem: ProductsStoreItem){
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

}
