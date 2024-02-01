import { StoreItem } from "src/app/shared/sharedItem";
import { Category } from "../../types/category.type";
import { CategoryService } from "./category.service";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { categories } from "../../sampleData/categories.data";

@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]>{
    constructor(private categoryService: CategoryService) {
        super([]);
    }

    async loadCategories() {
        this.categoryService.getAllcategories().subscribe(categories => {
            this.serValue(categories);
        });
    }

    get categories$(): Observable<Category[]> {
        return this.value$;
    }

    get topLevelCategories$(): Observable<Category[]>{
        return this.value$.pipe(
            map((categories) => 
            categories.filter((category) => category.parent_category_id === null)
        
       )
     );  
    }
}