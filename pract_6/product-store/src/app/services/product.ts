import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Ноутбук', manufacturer: 'Lenovo', description: 'Ноутбук для роботи та навчання' },
    { id: 2, name: 'Смартфон', manufacturer: 'Samsung', description: 'Мобільний телефон з потужною камерою' },
    { id: 3, name: 'Планшет', manufacturer: 'Apple', description: 'Планшет для малювання та перегляду медіа' }
  ];

  getItems(): Product[] {
    return this.products;
  }

  getItemById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addItem(product: Omit<Product, 'id'>) {
    const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
    const newProduct: Product = { id: newId, ...product };
    this.products.push(newProduct);
  }
}