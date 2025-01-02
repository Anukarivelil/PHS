import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-payment-gateway-service',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './payment-gateway-service.component.html',
  styleUrl: './payment-gateway-service.component.scss'
})
export class PaymentGatewayServiceComponent {
  bannerTitlefst: string = 'Payment Gateway Service';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Payment Gateway Service';
  productDetails1: string = "Our Payment Gateway Service is designed to handle all your payment needs with ease and security. Our platform seamlessly supports both offline and online transactions — whether your guests choose to pay with cash, credit/debit cards, UPI, or other digital methods. You can manage all payment records from a single, easy-to-use dashboard, helping you track, reconcile, and report your earnings with minimal effort.";
  productDetails2: string = 'This robust technology solution allows you to accept, process, and manage multiple payment methods effortlessly, providing a smooth and reliable experience for you and your guests. ';
  productDetails3: string = '';
  productDetails4: string = '';
  prodImage: string = 'right-lap-image.png';
}
