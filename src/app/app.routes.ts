import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { CartPage } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'cart', component: CartPage },
];

