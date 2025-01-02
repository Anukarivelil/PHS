import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OurTeamComponent } from '../../page/our-team/our-team.component';


@Component({
  selector: 'app-info-banner',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './info-banner.component.html',
  styleUrl: './info-banner.component.scss'
})
export class InfoBannerComponent {

}
