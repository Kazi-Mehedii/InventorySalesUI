import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/models/product.model';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [RouterLink,  CurrencyPipe],
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
items: any;
  constructor() { }

  private api = inject(ProductService)

  product = signal<Product[]>([]);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.api.getAllProducts().subscribe({
      next: (products) => {
        this.product.set(products);
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

  deleteProduct(id: number): void {
    if (!confirm('Are you sure you want to delete this product?'))  return;  
    this.api.deleteProduct(id).subscribe({
      next: () => {
        this.loadProducts();
      },
      error: (err) => {
        console.error('Error deleting product:', err);
      }
    });
  }

}
