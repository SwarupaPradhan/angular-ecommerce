import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetailsComponent {
  product: any;

  // Temporary mock data (same as products page)
  products = [
    { id: 1, name: 'Laptop', price: 999, image: 'https://via.placeholder.com/400', description: 'High performance laptop' },
    { id: 2, name: 'Headphones', price: 199, image: 'https://via.placeholder.com/400', description: 'Noise cancelling headphones' },
    { id: 3, name: 'Smartphone', price: 699, image: 'https://via.placeholder.com/400', description: 'Latest generation smartphone' },
  ];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
