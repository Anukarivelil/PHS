import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-about-phs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-phs.component.html',
  styleUrl: './about-phs.component.scss'
})
export class AboutPhsComponent {
  @Input() AboutPageHead: string = 'The PHS Story';
  AboutSubHead : string ='Our Core Services';

  aboutPara = [
    {parastrong:'Perfect Hands Solutions, established in 2012,'},
    {parastrong:'', para:' is more than just a software company. We combine technology with hands-on expertise to help accommodation providers achieve excellence. .'}
  ]
  coreService = [
    {pointstrong:'Property management software', points:'the PHS Channel Manager. It provides affordable and customisable solutions for all property needs'},
    {pointstrong:'Comprehensive hospitality support and personal guidance from industry experts', points:'includes marketing, staff recruitment, hotel setup consultancy, IT and construction guidance, procurement assistance, partnerships with top hotel chains '}
  ]
}
