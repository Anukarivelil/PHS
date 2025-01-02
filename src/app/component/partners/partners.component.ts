import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule, MatTooltip],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partnerRowFst = [
    { image: 'agoda.png' , tooltip:'Agoda'},
    { image: 'bookingcom.png' , tooltip:'booking.com'},
    { image: 'expedia.png' , tooltip:'expedia'},
    { image: 'goibibo.png' , tooltip:'goibibo'},
    { image: 'hotelcom.png' , tooltip:'Hotels.com'},
    { image: 'makemytrip.png' , tooltip:'Make My Trip'},
    { image: 'travelguru.png' , tooltip:'Travel Guru'},
    { image: 'yatra.png' , tooltip:'Yatra'}
  ];

  partnerRowSnd = [
    { image: 'yatra.png', tooltip:'yatra.com' },
    { image: 'travelguru.png', tooltip:'Travel Guru' },
    { image: 'agoda.png', tooltip:'Agoda' },
    { image: 'googlehotelad.png', tooltip:'Google Hotel Ad' },
    { image: 'bookingcom.png', tooltip:'booking.com' },
    { image: 'agoda.png', tooltip:'Agodsa' },
    { image: 'hotelcom.png', tooltip:'Hotels.com' },
    { image: 'expedia.png', tooltip:'expedia' }
  ];

  @ViewChild('mySection') mySection!: ElementRef;
  @ViewChild('partnerRow') partnerRow!: ElementRef;
  @ViewChild('partnerRowSecond') partnerRowSecond!: ElementRef;
  
  private leftPositionRowOne: number = 0;
  private leftPositionRowSecond: number = -100;
  private lastScrollTop: number = 0;

  // Listen to scroll event
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const sectionPosition = this.mySection.nativeElement.getBoundingClientRect();
    const partnerRowElement = this.partnerRow.nativeElement;
    const partnerRowSecondElement = this.partnerRowSecond.nativeElement;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    
    const partnerRowWidth = partnerRowElement.offsetWidth;
    const partnerRowSecondWidth = partnerRowSecondElement.offsetWidth;

    // Only apply this logic if the section is in view
    if (sectionPosition.top <= windowHeight) {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Scroll behavior for the first partnerRow
      if (scrollTop > this.lastScrollTop) {
        this.leftPositionRowOne -= 20;  // Move left when scrolling down
      } else {
        this.leftPositionRowOne += 20;  // Move right when scrolling up
      }

      // Constrain movement for the first partnerRow
      if (this.leftPositionRowOne > 0) {
        this.leftPositionRowOne = 0;  // Stop moving right if left position is greater than 0
      }
      if (this.leftPositionRowOne < -(partnerRowWidth - windowWidth)) {
        this.leftPositionRowOne = -(partnerRowWidth - windowWidth);  // Stop moving left if it hits right boundary
      }

      // Apply the new left position for the first partnerRow
      partnerRowElement.style.transform = `translateX(${this.leftPositionRowOne}px)`;

      // Scroll behavior for the second partnerRow in the reverse direction
      if (scrollTop > this.lastScrollTop) {
        this.leftPositionRowSecond += 20;  // Move right when scrolling down (reverse of first)
      } else {
        this.leftPositionRowSecond -= 20;  // Move left when scrolling up (reverse of first)
      }

      // Constrain movement for the second partnerRow
      if (this.leftPositionRowSecond > 0) {
        this.leftPositionRowSecond = 0;  // Stop moving left if right position is greater than 0
      }
      if (this.leftPositionRowSecond < -(partnerRowSecondWidth - windowWidth)) {
        this.leftPositionRowSecond = -(partnerRowSecondWidth - windowWidth);  // Stop moving right if it hits left boundary
      }

      // Apply the new left position for the second partnerRow
      partnerRowSecondElement.style.transform = `translateX(${this.leftPositionRowSecond}px)`;

      // Update the last scroll position
      this.lastScrollTop = scrollTop;
    }
  }
}
