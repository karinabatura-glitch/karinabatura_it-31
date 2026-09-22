import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { ProductDetail } from './components/product-detail/product-detail';
import { AddProductComponent } from './components/add-product/add-product';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'products', component: Products },
  { path: 'product/:id', component: ProductDetail },
  { path: 'add-product', component: AddProductComponent }
];