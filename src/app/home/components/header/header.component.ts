import { Component, EventEmitter,Output } from '@angular/core';
import { faSearch, faUser, faUserCircle, faHeart, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
faSearch = faSearch;
faUserCircle = faUserCircle;

faShoppingCart = faShoppingCart;

  @Output()
  searchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>();

constructor(public  categoryStore: CategoriesStoreItem) {}

  onClickSearch(keyword:string, categoryId:string):void {
    this.searchClicked.emit({ 
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }

}
