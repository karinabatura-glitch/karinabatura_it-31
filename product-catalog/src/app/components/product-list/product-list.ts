import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  name: string = '';
  price: number | null = null;
  quantity: number | null = null;

  constructor(private productService: ProductService) {}

  get products() {
    return this.productService.getProducts();
  }

  onAddProduct() {
    if (this.name.trim() && this.price !== null && this.quantity !== null) {
      this.productService.addProduct(this.name, Number(this.price), Number(this.quantity));
      
      this.name = '';
      this.price = null;
      this.quantity = null;
    }
  }

  onRemoveProduct(id: number) {
    this.productService.removeProduct(id);
  }
}