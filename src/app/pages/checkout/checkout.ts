import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class CheckoutComponent implements OnInit{
  cartItems: any[] = [];

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

   ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  } 
  
  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder() {
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/products']);
  }
}
