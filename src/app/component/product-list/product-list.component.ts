import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  productList = [
    {
      image: 'assets/prod-image.png',
      name: 'Revenue Management',
      link:'Products/Details/Revenue Management'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Booking Engine',
      link:'Products/Details/Booking Engine'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Payment Gateway Service',
      link:'Products/Details/Payment Gateway Service'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Secure E-Collect',
      link:'Products/Details/Secure E-Collect'
    },
    {
      image: 'assets/prod-image04.png',
      name: 'No-Show Revenue Protection',
      link:'Products/Details/No-Show Revenue Protection'
    },
    {
      image: 'assets/prod-image04.png',
      name: 'Marketing and Reservation Management',
      link:'Products/Details/Marketing and Reservation Management'
    },
    {
      image: 'assets/prod-image04.png',
      name: 'Property Management',
      link:'Products/Details/Property Management'
    },
    {
      image: 'assets/prod-image04.png',
      name: 'Corporate Tie-ups for Hotels',
      link:'Products/Details/Corporate Tie-ups for Hotels'
    },
  ];
}
