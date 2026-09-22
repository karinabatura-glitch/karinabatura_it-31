import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface ProductItem {
  name: string;
  manufacturer: string;
  description: string;
}

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProductComponent {
  submitted = false;

  newItem: ProductItem = {
    name: '',
    manufacturer: '',
    description: ''
  };

  productsList: ProductItem[] = [
    {
      name: 'Ноутбук',
      manufacturer: 'Lenovo',
      description: 'Ноутбук для роботи та навчання з продуктивним процесором.'
    }
  ];

  addProduct(form: NgForm) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.productsList.push({ ...this.newItem });

    form.resetForm();
    this.submitted = false;
  }
}