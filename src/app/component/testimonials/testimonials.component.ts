import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  testimonials = [
    { property:'testimonial-property01.png', 
      pname:'Hotel Imperial Regency Kochi',
      name:'Adarsh Joseph Varghese',
      designation:'Managing Director, Hotel Imperial Regency',
      message:'One of the best decisions we took in 2016 was to sign up with PHS to market  Wildernest and to manage our online presence. It was almost impossible for a small property like ours to do so and we have seen our bookings and business grow in the past two years. More importantly,'
    },
    { property:'testimonial-property01.png', 
      pname:'Hotel Imperial Regency Kochi',
      name:'Adarsh Varghese',
      designation:'Managing Director, Hotel Imperial Regency',
      message:'One of the best decisions we took in 2016 was to sign up with PHS to market  Wildernest and to manage our online presence. It was almost impossible for a small property like ours to do so and we have seen our bookings and business grow in the past two years. More importantly,'
    },
    { property:'testimonial-property01.png', 
      pname:'Hotel Imperial Regency Kochi',
      name:'Adarsh Joseph Varghese',
      designation:'Managing Director, Hotel Imperial Regency',
      message:'One of the best decisions we took in 2016 was to sign up with PHS to market  Wildernest and to manage our online presence. It was almost impossible for a small property like ours to do so and we have seen our bookings and business grow in the past two years. More importantly,'
    }
  ]

  selectedTestimonialIndex: number = 0;

  selectTestimonial(index: number) {
    this.selectedTestimonialIndex = index;
  }
}
