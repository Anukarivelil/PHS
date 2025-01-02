import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() productName: string = 'PHS Channel Manager Travelnet';
  @Input() productDetails1: string = 'Whether you organise camps, take city tours or conduct workshops, The PHS Perfect Experience is the software solution that activity providers have been waiting for. It allows you to manage and track all your activity bookings on a single platform. For the first time in India, here is a program that will take your business from paper to digital. Give your guests the perfect experience.';
  @Input() productDetails2: string = 'Whether you organise camps, take city tours or conduct workshops, The PHS Perfect Experience is the software solution that activity providers have been waiting for. It allows you to manage and track all your activity bookings on a single platform. ';
  @Input() productDetails3: string = '';
  @Input() productDetails4: string = '';
  @Input() productDetails5: string = '';
  @Input() productDetails6: string = '';
  @Input() prodImage: string = '';
}
