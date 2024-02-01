import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../types/category.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OnDestroy } from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent implements OnDestroy {
  @Output()
  subCategoryClicked: EventEmitter<number> = new EventEmitter<number>();
  categories:Category[]=[];
  subscriptions: Subscription = new Subscription();

  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add( categoryStore.categories$.subscribe((categories) => {
      this.categories = categories;
    }));
  
  }
  

  getCategories(pareCategoryId?:number):Category[]{
    return this.categories.filter(
      (category) =>  pareCategoryId ? category.parent_category_id === pareCategoryId : 
      category.parent_category_id === null
    );
   
  }

  OnSubCategoryClick(subCategory: Category) : void{
    this.subCategoryClicked.emit(subCategory.id);
  }


  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
