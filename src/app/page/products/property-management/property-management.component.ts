import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-property-management',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './property-management.component.html',
  styleUrl: './property-management.component.scss'
})
export class PropertyManagementComponent {
  bannerTitlefst: string = 'Property Management';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Property Management';
  productDetails1: string = "If you live far away from your property while it's sitting idle and collecting dust, we have the perfect solution for you. Our team ensures that your property is always in excellent condition. We take care of its regular maintenance and upkeep, from cleaning to minor repairs.";
  productDetails2: string = 'Our team also facilitates rental management, helping you make the most of your property by generating passive income while preserving its long-term value. We manage the entire rental process, from listing your property to screening potential renters. With a dedicated team managing your property, you’ll have peace of mind knowing it’s being looked after professionally and responsibly.';
  productDetails3: string = '';
  productDetails4: string = '';
  prodImage: string = 'right-lap-image.png';
}
