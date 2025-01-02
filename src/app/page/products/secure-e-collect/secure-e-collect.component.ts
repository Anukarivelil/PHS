import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-secure-e-collect',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './secure-e-collect.component.html',
  styleUrl: './secure-e-collect.component.scss'
})
export class SecureECollectComponent {
  bannerTitlefst: string = 'Secure E-Collect';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Secure E-Collect';
  productDetails1: string = "Our software offers Secure Electronic Transaction (SET) which ensures complete confidentiality and authentication of all your online transactions. It was developed to address the security concerns associated with payments done over the internet. Built on SET protocols, our software minimises risks and protects sensitive information, giving both you and your guests peace of mind with every transaction. ";
  productDetails2: string = 'To ensure safe and protected online payments with Secure E-Collect, offer your guests an encrypted payment link. Each link is designed to facilitate smooth and confidential payments as soon as the booking is made. Once the payment is successfully transferred, the booking is automatically confirmed, streamlining the reservation process and enhancing guest satisfaction. ';
  productDetails3: string = '';
  productDetails4: string = '';
  prodImage: string = 'right-lap-image.png';
}
