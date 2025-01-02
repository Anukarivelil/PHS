import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-booking-engine',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './booking-engine.component.html',
  styleUrl: './booking-engine.component.scss'
})
export class BookingEngineComponent {
  bannerTitlefst: string = 'Booking Engine';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Booking Engine';
  productDetails1: string = "Our booking engine is a tool that helps you synchronise availability, pricing, and reservation of your rooms across multiple platforms. It is designed to streamline the reservation process, offering your guests a simple, intuitive, and secure way to book rooms directly from your website. ";
  productDetails2: string = 'It aids in creating and managing custom packages or special offers to attract more bookings. You can easily set discounts, list your amenities, update cancellation policy and promotional offers, and other details on your page.';
  productDetails3: string = 'It keeps your inventory up-to-date across all channels and shows the availability of rooms in real-time. This enables your guests to book them in advance from any corner of the world.';
  productDetails4: string = 'Not only that, as you are selling rooms directly, you need not spend money on third-party commissions. Our booking engine helps streamline operations, enhance customer experience, and boost your revenue.';
  productDetails5: string = 'Our data-driven reports help you gain valuable insights into booking trends, guest preferences, and revenue performance. You can use these to refine your strategies and improve your property’s occupancy rates.';
  productDetails6: string = 'Automate booking management, improve guest experience, and maximise revenue with our advanced booking engine.';
  prodImage: string = 'right-lap-image.png';
}
