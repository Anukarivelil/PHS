import { Component } from '@angular/core';
import { MenuComponent } from '../../component/menu/menu.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { FooterComponent } from '../../component/footer/footer.component';
import { AboutPhsComponent } from '../../component/about-phs/about-phs.component';
import { ContactBannerComponent } from '../../component/contact-banner/contact-banner.component';
import { KeyFeatureComponent } from '../../component/key-feature/key-feature.component';
import { VisionMissionComponent } from '../../component/vision-mission/vision-mission.component';
import { CommonModule } from '@angular/common';
import { VisionAndMissionComponent } from '../../component/vision-and-mission/vision-and-mission.component';
import { InfoBannerComponent } from '../../component/info-banner/info-banner.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MenuComponent,BannerComponent,FooterComponent, AboutPhsComponent, ContactBannerComponent, KeyFeatureComponent,VisionMissionComponent,CommonModule, VisionAndMissionComponent, InfoBannerComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  bannerTitlefst: string = 'Innovative Solutions';
  bannerTitlesnd: string = 'for Smarter Property Management';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'About';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;
}
