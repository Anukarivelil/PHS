import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss'
})
export class PlansComponent {
  silverpack = [
    {list:'Channel management of over 32 OTAs'},
    {list:'Pushing Rates and planning for the next 365 days'},
    {list:'Push rates and inventory to all OTAs'},
    {list:'Booking engine tool for website'},
    {list:'Room reservation system'},
    {list:'Channel management of over 32 OTAs in the world'},
    {list:'Pushing dynamic rates to OTAs '},
    {list:'Payment gateway'},
    {list:'E-collect system to collect payment from tour operators'}
  ]


  goldpack = [
    {list:'Channel management of over 32 OTAs'},
    {list:'Pushing Rates and planning for the next 365 days'},
    {list:'Push rates and inventory to all OTAs'},
    {list:'Booking engine tool for website'},
    {list:'Room reservation system'},
    {list:'Channel management of over 32 OTAs in the world'},
    {list:'Pushing dynamic rates to OTAs '},
    {list:'Payment gateway'},
    {list:'E-collect system to collect payment from tour operators'}
  ]

  platinumpack = [
    {list:'Channel management of over 32 OTAs'},
    {list:'Pushing Rates and planning for the next 365 days'},

    {list:'Push rates and inventory to all OTAs'},
    {list:'Content updation'},
    {list:'Suggestions to promote your property on OTAs'},
    {list:'Rate suggestions based on market study'},

    {list:'Replying to online/OTA reviews'},
    {list:'Market study'},
    {list:'Payment assistance'},
    {list:'Updating bookings in channel manager calendar'},
    {list:'Resolving rate disparity issues'},
    {list:'Resolving overbooking'},

    {list:'Ensuring correct rates at displayed'},
    {list:'Update no-shows to OTAs'},
    {list:'Connecting property to new OTAs'},

    {list:'Booking engine tool for website'},
    {list:'Room reservation system'},
    {list:'Channel management of over 32 OTAs in the world'},
    {list:'Pushing dynamic rates to OTAs '},
    {list:'Payment gateway'},
    {list:'E-collect system to collect payment from tour operators'}
  ]
}
