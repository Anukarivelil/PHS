import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,MatTooltipModule, MatIconModule],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  PHSServiceList = [
    { name: 'PHS Channel Manager', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-01.png' },
    { name: 'OTA Revenue Management ', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-02.png' },
    { name: 'Booking Engine', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-03.png' },
    { name: 'Marketing and Reservation Management ', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-04.png' },
    { name: 'Property Management ', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-05.png' },
    { name: 'Corporate Tie-ups for hotels  ', detail: 'PHS Channel ManagerPHS Channel Manager', image: 'assets/service-image-01.png' },
   ];

  scroll(direction: string) {
    const scrollContainerEl = this.scrollContainer.nativeElement;

    if (direction === 'next') {
      scrollContainerEl.scrollLeft += 200; // Scroll 200px to the right
    } else if (direction === 'prev') {
      scrollContainerEl.scrollLeft -= 200; // Scroll 200px to the left
    }
  }
}
