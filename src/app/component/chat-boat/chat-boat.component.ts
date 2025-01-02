import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chat-boat',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './chat-boat.component.html',
  styleUrls: ['./chat-boat.component.scss'],
})
export class ChatBoatComponent implements OnInit {
  
  myControl = new FormControl('');
  options: string[] = 
  ['Question One',
  'Question two',
  'Question three'];
  filteredOptions!: Observable<string[]>;
  selectedItem: string = ''; // Default to an empty string to avoid null issues


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );

    this.myControl.valueChanges.subscribe((value) => {
      if (value && this.options.includes(value)) {
        this.selectedItem = value; // Set the selected item
      } else {
        this.selectedItem = ''; // Reset if the input is invalid
      }
    });
  }


  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
