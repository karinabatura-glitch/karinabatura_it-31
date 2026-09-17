import { Injectable, signal } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Ноутбук', price: 32000, quantity: 4 },
    { id: 2, name: 'Мишка', price: 800, quantity: 10 },
    { id: 3, name: 'Монітор', price: 9000, quantity: 3 }
  ]);

  getProducts() {
    return this.products;
  }

  addProduct(name: string, price: number, quantity: number) {
    const currentList = this.products();
    const newId = currentList.length > 0 
      ? Math.max(...currentList.map(p => p.id)) + 1 
      : 1;

    const newProduct: Product = {
      id: newId,
      name,
      price,
      quantity
    };

    this.products.update(list => [...list, newProduct]);
  }

  removeProduct(id: number) {
    this.products.update(list => list.filter(p => p.id !== id));
  }
}