import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  ftrproducts = [
    { product: 'PHS Channel Manager – Travelnet' },
    { product: 'Revenue Management –Dynamic Pricing ' },
    { product: 'Booking Engine' },
    { product: 'Payment Gateway Services ' },
    { product: 'BilSecure E- Collect ling' },
    { product: 'No – Show Revenue Protection ' },
  ];
  ftrservice = [
    { service: 'PHS Channel Manager ' },
    { service: 'OTA Revenue Management ' },
    { service: 'Booking Engine' },
    { service: 'Reservation Management ' },
    { service: 'Property Management ' },
    { service: 'Corporate Tie-ups ' },
  
  ];
  ftrquicklink = [
    { link: 'About PHS'},
    { link: 'Products'},
    { link: 'Service'},
    { link: 'Career'},
    { link: 'Contact US'}
  ];
}
