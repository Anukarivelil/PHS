
import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-no-show-revenue-protection',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './no-show-revenue-protection.component.html',
  styleUrl: './no-show-revenue-protection.component.scss'
})
export class NoShowRevenueProtectionComponent {
  bannerTitlefst: string = 'No-Show Revenue Protection';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'No-Show Revenue Protection';
  productDetails1: string = "Our No-Show Revenue Protection feature is a powerful tool designed to protect your business from the financial impact of last-minute cancellations and no-shows.";
  productDetails2: string = 'When guests make a reservation, you can securely capture their credit card information, giving you the ability to charge a no-show fee if they fail to arrive. In the event of an invalid credit card, the system automatically cancels the reservation, freeing up the room for new bookings and protecting your inventory from revenue leakage.';
  productDetails3: string = 'This proactive approach ensures that your revenue is safeguarded and helps you mitigate the losses associated with unfulfilled bookings. Using this feature, we minimise your financial risk and help protect your earnings and maintain a healthy bottom line.';
  productDetails4: string = '';
  prodImage: string = 'right-lap-image.png';
}
