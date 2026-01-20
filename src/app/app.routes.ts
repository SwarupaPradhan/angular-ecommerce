import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { CartPage } from './pages/cart/cart';
import { ProductDetailsComponent } from './product-details/product-details';


export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetailsComponent }, // ✅ ADD THIS
  { path: 'cart', component: CartPage },
];

