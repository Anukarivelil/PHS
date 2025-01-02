import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from '../register/register.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule, CommonModule,RegisterComponent,MatDialogModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
    constructor(private dialog: MatDialog) {}

  @Input() bannerTitle: string = '';
  @Input() bannerSecond: string = '';
  @Input() bannerDescription: string = '';
  @Input() primaryButtonText: string = 'Book a free Demo';
  @Input() secondaryButtonText: string = 'Register';
  @Input() subPage: string = '';
  @Input() subPageStat: boolean = false;
  @Input() videoStat:boolean = true;
  @Input() homeClass: boolean = true;

  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent);
  }
}
