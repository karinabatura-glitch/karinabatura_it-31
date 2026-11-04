import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ItemsComponent } from './pages/items/items';
import { AddItemComponent } from './pages/add-item/add-item';
import { ItemDetailComponent } from './pages/item-detail/item-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ItemsComponent },
  { path: 'products/add', component: AddItemComponent },
  { path: 'product/:id', component: ItemDetailComponent },
  { path: '**', redirectTo: '' }
];