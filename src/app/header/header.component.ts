import { Component } from '@angular/core';
import { faSearch, faUser, faUserCircle, faHeart, faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
faSearch = faSearch;
faUserCircle = faUserCircle;
faHeart = faHeart;
faShoppingCart = faShoppingCart;
}
