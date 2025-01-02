import { Component } from '@angular/core';
import { MenuComponent } from '../../component/menu/menu.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { ServiceListComponent } from '../../component/service-list/service-list.component';

@Component({
  selector: 'app-service-main',
  standalone: true,
  imports: [MenuComponent,BannerComponent,FooterComponent,ServiceListComponent],
  templateUrl: './service-main.component.html',
  styleUrl: './service-main.component.scss'
})
export class ServiceMainComponent {
  bannerTitlefst: string = 'PHS Service';
  bannerTitlesnd: string = 'Caption Will be Here';
  bannerDescription: string = 'Intuitive and easy to use cloud-based suite for accommodation providers of all types';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Service';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;
}
