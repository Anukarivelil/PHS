import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatIconModule],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.scss'
})
export class ServiceListComponent {
  PHSServiceList = [
    { name: 'PHS Channel Manager', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service01.png' },
    { name: 'OTA Revenue Management ', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service02.png' },
    { name: 'Booking Engine', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service01.png' },
    { name: 'Marketing and Reservation Management ', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service01.png' },
    { name: 'Property Management ', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service01.png' },
    { name: 'Corporate Tie-ups for hotels  ', detail: 'PHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel ManagerPHS Channel Manager', image: 'assets/service/service01.png' },
  ];
}
