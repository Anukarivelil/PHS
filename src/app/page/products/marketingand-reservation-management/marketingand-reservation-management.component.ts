import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-marketingand-reservation-management',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './marketingand-reservation-management.component.html',
  styleUrl: './marketingand-reservation-management.component.scss'
})
export class MarketingandReservationManagementComponent {
  bannerTitlefst: string = 'Marketing';
  bannerTitlesnd: string = 'and Reservation Management';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Marketing and Reservation Management';
  productDetails1: string = "If you are having trouble marketing your luxury stays, we are here to help. Our Marketing and Reservation Management service is designed to transform the way you reach your target audience. We don’t just promote your property; we can also rebrand it if necessary to create a distinct and appealing image. ";
  productDetails2: string = 'Through a combination of online and offline marketing channels, we ensure that your property receives the visibility it deserves, driving more bookings and enhancing your brand’s presence. Based on your property’s unique features and amenities, we categorise it under tailored themes like “Moksha Stays,” “Granary Stays,” and “Perfect Stays.” ';
  productDetails3: string = 'Through the marketing strategies we employ, you will be able to increase your revenue through OTAs as well as direct, in-person bookings of your hotels, home stays, resorts, or serviced villas. ';
  productDetails4: string = '';
  prodImage: string = 'right-lap-image.png';
}
