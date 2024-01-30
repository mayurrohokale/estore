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
    this.categories = categoryService.getAllcategories();
  }

  getCategories(pareCategoryId?:number):Category[]{
    return this.categories.filter(category => category.parent_category_id === pareCategoryId);
  }
}
