import { StoreItem } from "src/app/shared/sharedItem";
import { Product } from "../../types/products.type";
import { ProductsService } from "./products.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsStoreItem extends StoreItem<Product[]> {
  
    constructor(private  productsService: ProductsService) { 
        super([]);
    }

    async loadProducts(query?: string) {
        this.productsService.getAllProducts(query).subscribe((products)=>{
            this.serValue(products);
        });

        
    }
    
    get products$(): Observable<Product[]> {
        return this.value$;
    }

    get peoducts(): Product[] {
        return this.value;
    }

}