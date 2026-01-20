import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ HERE
import { CartService } from '../../services/cart.service'; // path to your service

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class CartPage {
  constructor(public cartService: CartService) {}

  get cartItems() {
    console.log('Cart page items:', this.cartService.getCartItems());
    return this.cartService.getCartItems();
  }

  remove(index: number) {
    this.cartService.removeFromCart(index);
  }

  clear() {
    this.cartService.clearCart();
  }
}
