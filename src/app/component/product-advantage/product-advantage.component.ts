import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-advantage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-advantage.component.html',
  styleUrl: './product-advantage.component.scss'
})
export class ProductAdvantageComponent {
  productList = [
    {
      image: 'assets/prod-image.png',
      name: 'Effortlessly Register Property on All Major OTAs',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Build a Strong Online Presence Quickly',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Simplify Bookings and Cancellations',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Manage Inventory in Real-Time',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Adjust Rates Based on Demand, Season, and Specific Days',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    },
    {
      image: 'assets/prod-image.png',
      name: 'Access the Software and Its Tools From Anywhere at Anytime',
      // link:'Products/Details/Revenue Management Dynamic Pricing'
    }
  ];
}
