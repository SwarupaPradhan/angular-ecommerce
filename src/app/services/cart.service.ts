import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cartItems = JSON.parse(savedCart);
    }
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.saveCart();
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.saveCart();
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }
}
