import { Component } from '@angular/core';
import { MenuComponent } from '../../component/menu/menu.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ContactBannerComponent } from '../../component/contact-banner/contact-banner.component';
import { CommonModule } from '@angular/common';
import { InfoBannerComponent } from '../../component/info-banner/info-banner.component';
import { RouterModule } from '@angular/router';
import { PlansComponent } from '../../component/plans/plans.component';
@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MenuComponent,BannerComponent,FooterComponent, ContactBannerComponent,CommonModule, InfoBannerComponent, RouterModule, PlansComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  bannerTitlefst: string = 'Partner with PHS ';
  bannerTitlesnd: string = 'for Smarter Property Management to Expand Your Visibility and Save More';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'About';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;
}
