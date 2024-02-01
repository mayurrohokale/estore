import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss']
})
export class SidenavigationComponent {
  categories:Category[]=[];
  constructor(categoryService:CategoryService){
    categoryService.getAllcategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getCategories(pareCategoryId?:number):Category[]{
    return this.categories.filter(
      (category) =>  pareCategoryId ? category.parent_category_id === pareCategoryId : 
      category.parent_category_id === null
    );
   
  }
}
