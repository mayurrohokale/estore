import { Component, EventEmitter,Output } from '@angular/core';
import { faSearch, faUser, faUserCircle, faHeart, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd,Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
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

  displaySearch: boolean = true;
constructor(public  categoryStore: CategoriesStoreItem, private router: Router, public  cartStore : CartStoreItem) {
  router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    this.displaySearch = (event as NavigationEnd).url === '/home/products' ? true : false;
  });
}

  onClickSearch(keyword:string, categoryId:string):void {
    this.searchClicked.emit({ 
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });
  }

}
