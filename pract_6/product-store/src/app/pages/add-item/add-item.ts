import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css'
})
export class AddItemComponent {
  name = '';
  manufacturer = '';
  description = '';
  submitted = false;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.invalid) {
      return;
    }

    this.productService.addItem({
      name: this.name,
      manufacturer: this.manufacturer,
      description: this.description
    });

    form.resetForm();
    this.submitted = false;
    this.router.navigate(['/products']);
  }
}