import { CommonModule  } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  HeaderMenu: any=[
    { menu: 'Home', link:'/' },
    { menu: 'Product & Service' , link:'Product & Service'},
    { menu: 'Pricing', link:'Pricing' },
    { menu: 'About Us' , link:'AboutPHS'},
    { menu: 'Contact Us' , link:'/'}
  ]
  isScrolled: boolean = false;

  // Detects scroll events and toggles isScrolled when page scrolls down 50px
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 150; // Adjust the value (50) for when you want the class to be applied
  }
}
