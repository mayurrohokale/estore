import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartStoreItem } from '../../services/cart/cart.storeItem';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../types/cart.type';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/users/user-service.service';
import { loggedInUser } from '../../types/user.type';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  faTrash = faTrash;
  user: loggedInUser;
  subscriptions: Subscription = new Subscription();

  constructor(
    public cartStore: CartStoreItem,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserServiceService,
  ) {
    this.user = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      pin: '',
    };
    this.subscriptions.add(
      userService.loggedInUser$.subscribe((loggedUser) => {
        if (loggedUser.firstName) {
          this.user = loggedUser;
        }
      })
    );
  }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: [
        `${this.user.firstName} ${this.user.lastName}`,
        Validators.required,
      ],
      address: [this.user.address, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
      pin: [this.user.pin, Validators.required],
    });
  }

  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }

  updateQuantity($event: any, cartItem: CartItem): void {
    if ($event.target.innerText === '+') {
      this.cartStore.addProduct(cartItem.product);
    } else if ($event.target.innerText === '-') {
      this.cartStore.decreaseProductQuantity(cartItem);
    }
  }

  removeItem(cartItem: CartItem): void {
    this.cartStore.removeProduct(cartItem);
  }

  onSubmit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
