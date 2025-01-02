import { Component } from '@angular/core';
import { BannerComponent } from '../../component/banner/banner.component';
import { MenuComponent } from '../../component/menu/menu.component';
import { ChatBoatComponent } from '../../component/chat-boat/chat-boat.component';
import { HmProductComponent } from '../../component/hm-product/hm-product.component';
import { ServiceComponent } from '../../component/service/service.component';
import { PartnersComponent } from '../../component/partners/partners.component';
import { TestimonialsComponent } from '../../component/testimonials/testimonials.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { StatiticsComponent } from '../../component/statitics/statitics.component';
import { HmAboutComponent } from '../../component/hm-about/hm-about.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, MenuComponent, ChatBoatComponent, HmProductComponent, ServiceComponent, PartnersComponent, TestimonialsComponent, FooterComponent, StatiticsComponent, HmAboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  bannerTitlefst: string = 'Simplify Success';
  bannerTitlesnd: string = 'in Property Management';
  bannerDescription: string = 'with Perfect Hands Solutions';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Home';
  subPageStat: boolean = false;
  homeClass: boolean = true;
}
