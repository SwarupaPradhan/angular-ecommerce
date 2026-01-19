import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
})
export class Products {
  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 999,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 2,
      name: 'Headphones',
      price: 199,
      image: 'https://via.placeholder.com/200',
    },
    {
      id: 3,
      name: 'Smartphone',
      price: 699,
      image: 'https://via.placeholder.com/200',
    },
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart`);
  }
}
