import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-revenue-management',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './revenue-management.component.html',
  styleUrl: './revenue-management.component.scss'
})
export class RevenueManagementComponent {
  bannerTitlefst: string = 'Revenue Management';
  bannerTitlesnd: string = '';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Revenue Management';
  productDetails1: string = "Our revenue management software is a platinum service designed to transform your pricing strategy and drive more online bookings across various platforms. ";
  productDetails2: string = 'Its dynamic pricing capabilities will let you adjust the settings to automatically update the rates based on factors like occupancy, seasonality, demand, and other critical market trends. This ensures your property is always competitively priced, increasing online sales and optimising revenue potential. It also increases your online visibility and ensures that you are never overbooked. It even allows you to offer discounts. ';
  productDetails3: string = 'Our revenue management solution empowers you to maximise your earnings with minimal effort, giving you peace of mind and more time to focus on guest satisfaction.';
  productDetails4: string = '';
  prodImage: string = 'service/Revenue Management.jpg';
}
