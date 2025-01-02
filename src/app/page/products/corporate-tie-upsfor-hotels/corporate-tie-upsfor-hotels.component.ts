import { Component } from '@angular/core';
import { MenuComponent } from '../../../component/menu/menu.component';
import { BannerComponent } from '../../../component/banner/banner.component';
import { ProductListComponent } from '../../../component/product-list/product-list.component';
import { FooterComponent } from '../../../component/footer/footer.component';
import { ProductDetailComponent } from '../../../component/product-detail/product-detail.component';
import { ProductAdvantageComponent } from '../../../component/product-advantage/product-advantage.component';
import { ProductKeyDetailsComponent } from '../../../component/product-key-details/product-key-details.component';

@Component({
  selector: 'app-corporate-tie-upsfor-hotels',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent, ProductDetailComponent, ProductAdvantageComponent,ProductKeyDetailsComponent],
  templateUrl: './corporate-tie-upsfor-hotels.component.html',
  styleUrl: './corporate-tie-upsfor-hotels.component.scss'
})
export class CorporateTieUpsforHotelsComponent {
  bannerTitlefst: string = 'Corporate Tie-ups';
  bannerTitlesnd: string = 'for Hotels';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products & Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;

  productName: string = 'Corporate Tie-ups for Hotels';
  productDetails1: string = 'It can be challenging to manage your property if you are not an experienced hotelier as you may not have the necessary know-how or expertise. ';
  productDetails2: string = 'As someone who offers luxury accommodation, PHS can help you boost your revenue by helping you to gain the backing of a top-tier, 5 star hotel chain. A tie-up with major hotel brands based on a management or revenue-sharing system will help you take your business to the next level. ';
  productDetails3: string = 'We act as the middle men who coordinate and make a deal between you, the hotel owner, and big hotel chains like Taj, Ramada, Hilton, etc. We negotiate the terms and conditions so that you get the best deal and maximum revenue. Beyond the tie-up, we offer guidance in setting up essential operations like kitchen design, IT infrastructure, and expense management to ensure smooth integration. ';
  productDetails4: string = 'We continue to be part of this transparent process to ensure that the operations are smooth and the deal is honoured by both parties. We handhold you throughout this journey to make sure that your property and assets are maintained and managed with utmost care. ';
  prodImage: string = 'right-lap-image.png';
}
