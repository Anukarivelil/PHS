import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-revenue-management-dynamic-pricing',
  standalone: true,
  imports: [ProductListComponent, MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './revenue-management-dynamic-pricing.component.html',
  styleUrl: './revenue-management-dynamic-pricing.component.scss'
})
export class RevenueManagementDynamicPricingComponent {
    bannerTitlefst: string = 'PHS Channel Manager';
    bannerTitlesnd: string = '';
    bannerDescription: string = '';
    primaryButtonText: string = 'Book a free Demo';
    secondaryButtonText: string = 'Registerrrrrrr';
    subPage: string = 'Products & Service';
    subPageStat: boolean = true;
    videoStat: boolean = false;
    homeClass: boolean = false;

    productName: string = 'PHS Channel Manager';
    productDetails1: string = 'Experience the ease of managing your property with PHS Channel Manager - a user-friendly software designed to make channel management efficient and hassle-free. Our software equips you with the necessary tools to manage your business in the digital landscape, whether you operate a hotel, resort, homestay, or serviced villa. Your days of manually taking care of your various tasks are over. Embrace a streamlined, automated approach that saves time and boosts productivity with PHS Channel Manager.';
    productDetails2: string = 'Take the first step toward streamlined management and increased bookings. Book a free demo with the PHS Channel Manager today and discover the power of effortless, efficient property management. ';
    productDetails3: string = '';
    productDetails4: string = '';
    prodImage: string = 'right-lap-image.png';
  }

