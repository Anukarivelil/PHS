import { Component } from '@angular/core';
import { MenuComponent } from '../../component/menu/menu.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { ProductListComponent } from '../../component/product-list/product-list.component';
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-produnt-main',
  standalone: true,
  imports: [MenuComponent,BannerComponent, ProductListComponent, FooterComponent],
  templateUrl: './produnt-main.component.html',
  styleUrl: './produnt-main.component.scss'
})
export class ProduntMainComponent {
  bannerTitlefst: string = 'PHS Product';
  bannerTitlesnd: string = 'Caption Will be Here';
  bannerDescription: string = 'Intuitive and easy to use cloud-based suite for accommodation providers of all types';
  primaryButtonText: string = 'Book a free Demo';
  secondaryButtonText: string = 'Registerrrrrrr';
  subPage: string = 'Products';
  subPageStat: boolean = true;
  videoStat: boolean = false;
  homeClass: boolean = false;
}
