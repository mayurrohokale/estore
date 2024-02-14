import { Component, EventEmitter,Output, OnDestroy } from '@angular/core';
import { faSearch, faUser, faUserCircle, faHeart, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { SearchKeyword } from '../../types/searchKeyword.type';
import { NavigationEnd,Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { UserServiceService } from '../../services/users/user-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{

faSearch = faSearch;
faUserCircle = faUserCircle;

faShoppingCart = faShoppingCart;
subscription: Subscription = new Subscription();

  @Output()
  searchClicked: EventEmitter<SearchKeyword> = new EventEmitter<SearchKeyword>();

  displaySearch: boolean = true;
  isUserAuthenticated: boolean = false;
  userName: string = '';


constructor(public  categoryStore: CategoriesStoreItem, private router: Router, public  cartStore : CartStoreItem,
  public userService: UserServiceService) {
  router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    this.displaySearch = (event as NavigationEnd).url === '/home/products' ? true : false;
  });

  this.subscription.add(this.userService.isUserAuthenticated$.subscribe((result)=> {
    this.isUserAuthenticated = result;
  }));

  this.subscription.add(this.userService.loggedInUser$.subscribe((result) => {
    this.userName = result.firstName;
  }));
}

  onClickSearch(keyword:string, categoryId:string):void {
    this.searchClicked.emit({ 
      categoryId: parseInt(categoryId),
      keyword: keyword,
    });

 
  }

  navigatToCart():void{
    this.router.navigate(['home/cart']);
  }

  logout(): void{
    this.userService.logout();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
