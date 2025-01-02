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
import { TeamsComponent } from '../../component/teams/teams.component';


@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [MenuComponent, TeamsComponent, BannerComponent,FooterComponent, AboutPhsComponent, ContactBannerComponent, KeyFeatureComponent,VisionMissionComponent,CommonModule, VisionAndMissionComponent, InfoBannerComponent],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.scss'
})
export class OurTeamComponent {
  bannerTitlefst: string = 'Meet the Faces Behind PHS';
  bannerTitlesnd: string = 'for Smarter Property Management';
  bannerDescription: string = '';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'About';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;
}
